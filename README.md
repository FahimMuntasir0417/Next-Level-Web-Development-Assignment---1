# Blog Post

## 1 . TypeScript-এ interface এবং type-এর মধ্যে পার্থক্য কী?

#### TypeScript-এ interface এবং type—দুটোই অবজেক্টের গঠন (structure) নির্ধারণ করতে ব্যবহৃত হয়, তবে এদের নমনীয়তা (flexibility) এবং ব্যবহারের ক্ষেত্রে পার্থক্য রয়েছে। Interface প্রসারযোগ্য (extendable) এবং মূলত অবজেক্টের আকার বা স্ট্রাকচার নির্ধারণে ব্যবহৃত হয়, অন্যদিকে type আরও বহুমুখী; এটি union, intersection সহ আরও জটিল টাইপ তৈরি করতে সক্ষম।

### Type in TypeScript

- TypeScript-এর টাইপ সিস্টেম ভাষাটিতে সমর্থিত বিভিন্ন ডেটা টাইপ বর্ণনা করে। এটি তিনটি প্রধান ভাগে বিভক্ত: Any Type, Built-In Type এবং User-Defined Type। TypeScript-এর টাইপ সিস্টেম প্রোগ্রামে ব্যবহারের আগে ডেটা টাইপ সঠিক কিনা তা নিশ্চিত করার দায়িত্বে থাকে।

  উদাহরণ:

  এই উদাহরণে আমরা দুটি TypeScript টাইপ—Geeks এবং MoreGeeks—নির্ধারণ করি এবং intersection অপারেটর & ব্যবহার করে সেগুলোকে একত্র করি। gfg কনস্ট্যান্টটি উভয় টাইপ অনুসরণ করে এবং সম্মিলিত অবজেক্টটি সঞ্চয় ও প্রদর্শন করে।

  ```
  type Geeks = {
  name: string;
  age: number;
  };

  type MoreGeeks = {
  email: string;
  };

  type CombinedGeeks = Geeks & MoreGeeks;

  const gfg: CombinedGeeks = {
  name: "kgowda",
  age: 20,
  email: "kgowda@gmail.com"
  };

  console.log(gfg);

  // OutPut
  {"name": "kgowda","age": 20,"email": "kgowda@gmail.com"}
  ```

### Interface in TypeScript

- TypeScript-এ Interface একটি সিন্ট্যাকটিক্যাল চুক্তি, যেটি কোনো entity (যেমন অবজেক্ট বা ক্লাস) অনুসরণ করতে বাধ্য। এর মধ্যে শুধুমাত্র প্রপার্টি, মেথড এবং ইভেন্টের ঘোষণা থাকে—তবে কোনো বাস্তবায়ন (implementation) থাকে না। Interfaces এমন একটি মানসম্মত কাঠামো নির্ধারণ করে, যেটি যেসব ক্লাস implement করে তাদের অনুসরণ করতে হয়।

  উদাহরণ: এই উদাহরণে দেখানো হয়েছে TypeScript-এ interface merging কিভাবে কাজ করে। দুইটি Geeks interface স্বয়ংক্রিয়ভাবে একত্রিত হয়ে একটি interface তৈরি করে, যার ফলে gfg অবজেক্টটি name, age এবং email—তিনটি প্রপার্টিই implement করতে পারে এবং merged ফলাফল লগ করতে পারে।

  ```
  // Creating a interface
  interface Geeks {
  name: string;
  age: number
  }

  interface Geeks {
  email: string;
  }

  // Using the merged interface
  const gfg: Geeks = {
  name: "kgowda",
  age: 20,
  email: "kgowda@gmail.com"
  };

  console.log(gfg);
  ```

### TypeScript-এ Type এবং Interface-এর পার্থক্য

| বৈশিষ্ট্য (Feature)                       | Type                                                   | Interface                                   |
| ----------------------------------------- | ------------------------------------------------------ | ------------------------------------------- |
| **Definition**                            | বিভিন্ন ডেটা টাইপের একটি সংগ্রহ                        | একটি সিন্ট্যাকটিক্যাল চুক্তি                |
| **Flexibility**                           | বেশি flexible                                          | type-এর তুলনায় কম flexible                  |
| **Keyword**                               | `type` কীওয়ার্ড ব্যবহার করে                            | `interface` কীওয়ার্ড ব্যবহার করে            |
| **Naming**                                | নতুন একটি টাইপের নাম তৈরি করতে সাহায্য করে             | entity সংজ্ঞায়িত করার উপায় দেয়           |
| **Capabilities**                          | অপেক্ষাকৃত কম ক্ষমতা                                   | অপেক্ষাকৃত বেশি ক্ষমতা                      |
| **Object Usage**                          | স্বাভাবিকভাবে object ব্যবহারের জন্য তৈরি নয়            | object ব্যবহারের জন্য তৈরি                  |
| **Merged Declarations**                   | একাধিক merged declaration সাপোর্ট করে না               | একাধিক merged declaration সাপোর্ট করে       |
| **Name Conflicts**                        | একই নামে দুইটি type থাকলে error দেয়                    | একই নামে দুইটি interface থাকলে merge হয়     |
| **Implementation**                        | কোনো implementation-এ ব্যবহৃত হয় না                    | class-এ implement বা extend করতে ব্যবহৃত হয় |
| **Union Types**                           | union type implement বা extend করা যায় না              | union type implement বা extend করা যায়      |
| **Intersection Types**                    | একাধিক type মিলিয়ে intersection টাইপ তৈরি করা যায়      | intersection interface তৈরি করা যায় না      |
| **Usage with Primitives, Unions, Tuples** | primitive, union, tuple—সব ধরনের টাইপে ব্যবহার করা যায় | primitive বা tuple টাইপে ব্যবহার করা যায় না |

## 2. TypeScript-এর any, unknown, এবং never টাইপের পার্থক্য

### Any type :

- any টাইপ মূলত কোনো ভেরিয়েবলের টাইপ-চেকিং বন্ধ করে দেয়।
- any হিসেবে ঘোষিত একটি ভেরিয়েবল যেকোনো ধরনের মান ধারণ করতে পারে, এবং তার ওপর যেকোনো অপারেশন করা যায়—TypeScript কোনো টাইপ এরর দেবে না।
- any ব্যবহার করুন তখন, যখন আপনাকে ইচ্ছাকৃতভাবে টাইপ-চেকিং এড়িয়ে যেতে হয়—সাধারণত ডায়নামিক ডেটা, বা এমন পুরানো JavaScript কোডের সাথে কাজ করার সময় যেখানে টাইপ নির্ধারণ করা কঠিন।

```
let valueAny: any = "hello";
valueAny = 123; // No error
valueAny.toFixed(); // No error, even if valueAny is a string
```

## Unknwn type :

- unknown টাইপ হলো any-এর একটি টাইপ-নিরাপদ বিকল্প।
- unknown হিসেবে ঘোষিত একটি ভেরিয়েবলও যেকোনো ধরনের মান ধারণ করতে পারে।
  তবে any-এর মতো ইচ্ছামতো অপারেশন করা যায় না—প্রথমে টাইপ গার্ড বা টাইপ অ্যাসার্শন ব্যবহার করে তার টাইপ নির্ণয় করতে হয়।
- যখন কোনো মানের টাইপ আপনি জানেন না, কিন্তু ব্যবহার করার আগে টাইপ-নিরাপত্তা নিশ্চিত করতে চান, তখন unknown ব্যবহার করুন।

```
let valueUnknown: unknown = "hello";
valueUnknown = 123; // No error

// valueUnknown.toFixed(); // Error: Object is of type 'unknown'.
if (typeof valueUnknown === 'number') {
    valueUnknown.toFixed(); // OK, type is narrowed to number
}
```

## Nver type :

- never টাইপ এমন মানকে নির্দেশ করে যা কখনোই ঘটবে না।
- এটি সাধারণত সেই সব ফাংশনের জন্য ব্যবহৃত হয় যেগুলো কখনোই রিটার্ন করে না (যেমন সর্বদা এরর ছোড়ে এমন ফাংশন বা অনন্ত লুপে চলে যাওয়া ফাংশন) অথবা exhaustive টাইপ চেকের সময়, যেখানে সব সম্ভাব্য কেস আগে থেকেই হ্যান্ডেল করা হয়েছে।
- never হলো অন্যান্য সব টাইপের একটি সাবটাইপ, কিন্তু কোনো টাইপই never-এর সাবটাইপ নয় (never নিজেকে ছাড়া)।

```
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // ...
    }
}

type Shape = 'circle' | 'square';
function getArea(shape: Shape): number {
    switch (shape) {
        case 'circle': return Math.PI;
        case 'square': return 1;
        default:
            const exhaustiveCheck: never = shape; // Ensures all cases are handled
            throw new Error(`Unhandled shape: ${exhaustiveCheck}`);
    }
}
```

| টাইপ        | যেকোনো মান রাখা যায়? | সরাসরি ব্যবহার করা যায়? | নিরাপত্তা | ব্যবহার ক্ষেত্র       |
| ----------- | --------------------- | ------------------------ | --------- | --------------------- |
| **any**     | হ্যাঁ                 | হ্যাঁ (সব অপারেশন)       | কম        | টাইপ-চেক বন্ধ করতে    |
| **unknown** | হ্যাঁ                 | না (টাইপ চেক দরকার)      | বেশি      | নিরাপদ ডায়নামিক ডেটা |
| **never**   | না                    | না                       | N/A       | অসম্ভব পরিস্থিতি      |
