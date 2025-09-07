# Hashing + Frequency Patterns - Complete Study Notes

## 1. HashMap/HashSet Basics

### What are Hash Data Structures?

**HashMap (Map in JavaScript)**: A key-value data structure that stores pairs of keys and values, where each key is unique and maps to exactly one value.

**HashSet (Set in JavaScript)**: A collection of unique values with no duplicates allowed.

### Key Characteristics

- **Average Time Complexity**: O(1) for insertion, deletion, and lookup
- **Space Complexity**: O(n) where n is the number of elements
- **Unordered**: Elements don't maintain insertion order (though modern JS implementations often do)
- **Dynamic**: Can grow and shrink during runtime

## 2. When to Use Map vs Set

### Use **Map** when you need:
- Key-value relationships
- Frequency counting
- Caching/memoization
- Mapping one thing to another
- Need to associate additional data with keys

### Use **Set** when you need:
- Unique collections
- Removing duplicates
- Membership testing
- Mathematical set operations
- Just need to track existence, not additional data

### Comparison Table

| Feature | Map | Set |
|---------|-----|-----|
| Storage | Key-Value pairs | Unique values only |
| Lookup | `map.get(key)` | `set.has(value)` |
| Addition | `map.set(key, value)` | `set.add(value)` |
| Removal | `map.delete(key)` | `set.delete(value)` |
| Use Case | When you need associated data | When you only care about uniqueness |

## 3. Frequency Counting

Frequency counting is one of the most common use cases for HashMaps. It involves counting how many times each element appears in a collection.

### Basic Frequency Counter Pattern

```javascript
function countFrequency(arr) {
    const frequencyMap = new Map();
    
    for (const element of arr) {
        // Get current count (default to 0 if not exists)
        const currentCount = frequencyMap.get(element) || 0;
        // Increment and set new count
        frequencyMap.set(element, currentCount + 1);
    }
    
    return frequencyMap;
}

// Example usage
const numbers = [1, 2, 2, 3, 3, 3, 4];
const frequencies = countFrequency(numbers);
console.log(frequencies);
// Map { 1 => 1, 2 => 2, 3 => 3, 4 => 1 }
```

### Alternative Frequency Counter (Using Object)

```javascript
function countFrequencyObject(arr) {
    const freq = {};
    
    for (const element of arr) {
        freq[element] = (freq[element] || 0) + 1;
    }
    
    return freq;
}

// Example usage
const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
const wordFreq = countFrequencyObject(words);
console.log(wordFreq);
// { apple: 3, banana: 2, cherry: 1 }
```

### Character Frequency in Strings

```javascript
function charFrequency(str) {
    const charMap = new Map();
    
    for (const char of str.toLowerCase()) {
        if (char !== ' ') { // Skip spaces
            charMap.set(char, (charMap.get(char) || 0) + 1);
        }
    }
    
    return charMap;
}

// Example usage
const text = "Hello World";
const charFreq = charFrequency(text);
console.log(charFreq);
// Map { 'h' => 1, 'e' => 1, 'l' => 3, 'o' => 2, 'w' => 1, 'r' => 1, 'd' => 1 }
```

## 4. Key-Value Relationships

Maps excel at establishing relationships between different pieces of data.

### Student Grades Example

```javascript
// Storing student information
const studentGrades = new Map();

studentGrades.set('Alice', 85);
studentGrades.set('Bob', 92);
studentGrades.set('Charlie', 78);

// Accessing grades
console.log(`Alice's grade: ${studentGrades.get('Alice')}`); // 85

// Checking if student exists
if (studentGrades.has('David')) {
    console.log(`David's grade: ${studentGrades.get('David')}`);
} else {
    console.log('David not found');
}

// Iterating through all students
for (const [student, grade] of studentGrades) {
    console.log(`${student}: ${grade}`);
}
```

### Caching/Memoization Example

```javascript
// Fibonacci with memoization
function fibonacciMemo() {
    const cache = new Map();
    
    function fib(n) {
        if (cache.has(n)) {
            return cache.get(n);
        }
        
        let result;
        if (n <= 1) {
            result = n;
        } else {
            result = fib(n - 1) + fib(n - 2);
        }
        
        cache.set(n, result);
        return result;
    }
    
    return fib;
}

const fibonacci = fibonacciMemo();
console.log(fibonacci(10)); // 55
console.log(fibonacci(20)); // 6765
```

## 5. Hash Collisions (Basic Understanding)

### What are Hash Collisions?

A hash collision occurs when two different keys produce the same hash value, meaning they would be stored in the same location in the hash table.

### Why Do Collisions Happen?

- **Infinite keys, finite hash table**: There are unlimited possible keys but limited hash table slots
- **Hash function limitations**: No hash function can perfectly distribute all possible inputs
- **Pigeonhole principle**: If you have more items than containers, some containers must hold multiple items

### Collision Resolution Methods

#### 1. Chaining (Separate Chaining)
Each hash table slot contains a linked list of all elements that hash to that location.

```javascript
// Simplified hash table with chaining (conceptual)
class HashTableWithChaining {
    constructor(size = 10) {
        this.size = size;
        this.buckets = Array(size).fill(null).map(() => []);
    }
    
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }
    
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        
        // Check if key already exists
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update existing
                return;
            }
        }
        
        // Add new key-value pair
        bucket.push([key, value]);
    }
    
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }
        
        return undefined;
    }
}
```

#### 2. Open Addressing (Linear Probing)
When a collision occurs, find the next available slot.

```javascript
// Simplified hash table with linear probing (conceptual)
class HashTableWithProbing {
    constructor(size = 10) {
        this.size = size;
        this.keys = Array(size).fill(null);
        this.values = Array(size).fill(null);
    }
    
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }
    
    set(key, value) {
        let index = this.hash(key);
        
        // Linear probing to find available slot
        while (this.keys[index] !== null && this.keys[index] !== key) {
            index = (index + 1) % this.size;
        }
        
        this.keys[index] = key;
        this.values[index] = value;
    }
    
    get(key) {
        let index = this.hash(key);
        
        // Linear probing to find the key
        while (this.keys[index] !== null) {
            if (this.keys[index] === key) {
                return this.values[index];
            }
            index = (index + 1) % this.size;
        }
        
        return undefined;
    }
}
```

### Impact of Collisions

- **Performance**: Too many collisions can degrade O(1) performance to O(n)
- **Load Factor**: Ratio of elements to hash table size; higher load factor = more collisions
- **Good Hash Functions**: Distribute keys uniformly to minimize collisions

## 6. Common Patterns and Use Cases

### Pattern 1: Two Sum Problem

```javascript
function twoSum(nums, target) {
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        numMap.set(nums[i], i);
    }
    
    return [];
}

// Example
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
```

### Pattern 2: Finding Duplicates

```javascript
function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
    
    for (const element of arr) {
        if (seen.has(element)) {
            duplicates.add(element);
        } else {
            seen.add(element);
        }
    }
    
    return Array.from(duplicates);
}

// Example
console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5])); // [2, 3]
```

### Pattern 3: Grouping Elements

```javascript
function groupAnagrams(strs) {
    const anagramMap = new Map();
    
    for (const str of strs) {
        // Sort characters to create a key
        const sortedStr = str.split('').sort().join('');
        
        if (!anagramMap.has(sortedStr)) {
            anagramMap.set(sortedStr, []);
        }
        
        anagramMap.get(sortedStr).push(str);
    }
    
    return Array.from(anagramMap.values());
}

// Example
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
```

## 7. Best Practices

### When to Use Map vs Object in JavaScript

**Use Map when:**
- Keys are not strings
- Key-value pairs are added/removed frequently
- Need to iterate in insertion order
- Need the size property

**Use Object when:**
- Keys are strings/symbols
- You need JSON serialization
- Working with records with known string keys
- Better performance for small collections

### Memory and Performance Tips

```javascript
// Good: Clear maps when no longer needed
const tempMap = new Map();
// ... use map
tempMap.clear(); // Explicitly clear

// Good: Use appropriate data structure
const uniqueItems = new Set(array); // Remove duplicates
const itemCounts = new Map(); // Count frequencies

// Good: Check existence before accessing
if (map.has(key)) {
    const value = map.get(key);
    // Use value
}
```

## 8. Common Interview Problems

### Problem 1: Valid Anagram
```javascript
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    
    const charCount = new Map();
    
    // Count characters in first string
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Subtract characters from second string
    for (const char of t) {
        if (!charCount.has(char)) return false;
        
        const count = charCount.get(char) - 1;
        if (count === 0) {
            charCount.delete(char);
        } else {
            charCount.set(char, count);
        }
    }
    
    return charCount.size === 0;
}
```

### Problem 2: First Non-Repeating Character
```javascript
function firstUniqChar(s) {
    const charCount = new Map();
    
    // Count all characters
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Find first character with count 1
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }
    
    return -1;
}
```

## Summary

- **HashMap/Map**: Use for key-value relationships, frequency counting, and caching
- **HashSet/Set**: Use for unique collections and membership testing
- **Frequency Counting**: Essential pattern using maps to count occurrences
- **Hash Collisions**: Natural occurrence handled by chaining or open addressing
- **Performance**: Average O(1) operations make hash structures highly efficient
- **Choose Wisely**: Map vs Set vs Object depends on your specific use case