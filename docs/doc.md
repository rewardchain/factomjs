<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Entry][1]
    -   [Parameters][2]
    -   [Properties][3]
    -   [Examples][4]
    -   [chainIdHex][5]
    -   [contentHex][6]
    -   [extIdsHex][7]
    -   [size][8]
    -   [payloadSize][9]
    -   [rawDataSize][10]
    -   [remainingFreeBytes][11]
    -   [remainingMaxBytes][12]
    -   [hash][13]
    -   [hashHex][14]
    -   [marshalBinary][15]
    -   [marshalBinaryHex][16]
    -   [ecCost][17]
    -   [builder][18]
        -   [Parameters][19]
-   [EntryBuilder][20]
    -   [Parameters][21]
    -   [content][22]
        -   [Parameters][23]
    -   [chainId][24]
        -   [Parameters][25]
    -   [extIds][26]
        -   [Parameters][27]
    -   [extId][28]
        -   [Parameters][29]
    -   [timestamp][30]
        -   [Parameters][31]
    -   [blockContext][32]
        -   [Parameters][33]
    -   [build][34]
-   [EntryBlockContext][35]
    -   [Properties][36]
-   [composeEntryCommit][37]
    -   [Parameters][38]
-   [composeEntryReveal][39]
    -   [Parameters][40]
-   [composeEntry][41]
    -   [Parameters][42]
-   [computeEntryTxId][43]
    -   [Parameters][44]

## Entry

[src/entry.js:26-171][45]

Class representing an Entry

### Parameters

-   `builder` **[EntryBuilder][46]** 

### Properties

-   `chainId` **[Buffer][47]** Chain ID.
-   `extIds` **[Array][48]&lt;[Buffer][47]>** External IDs.
-   `content` **[Buffer][47]** Content.
-   `timestamp` **[number][49]** Timestamp in milliseconds for the commit.
-   `blockContext` **[EntryBlockContext][50]** Block context. This property is _not_ populated when using the method getEntry.

### Examples

```javascript
const myEntry = Entry.builder()
.chainId('9107a308f91fd7962fecb321fdadeb37e2ca7d456f1d99d24280136c0afd55f2')
.extId('6d79206578742069642031') // If no encoding parameter is passed as 2nd argument, 'hex' is used as default
.extId('Some external ID', 'utf8')
.content('My new content',  'utf8')
.build();
```

### chainIdHex

[src/entry.js:43-45][51]

Returns **[string][52]** Chain ID of the entry as hex encoded string.

### contentHex

[src/entry.js:50-52][53]

Returns **[string][52]** Entry content as hex encoded string.

### extIdsHex

[src/entry.js:57-59][54]

Returns **[Array][48]&lt;[string][52]>** External ids as hex encoded strings.

### size

[src/entry.js:66-69][55]

Get the entry size.

Returns **[number][49]** The entry size in bytes.

### payloadSize

[src/entry.js:75-77][56]

Get the entry payload size (excluding the header).

Returns **[number][49]** The entry payload size in bytes.

### rawDataSize

[src/entry.js:83-85][57]

Get the entry raw data size (payload size excluding the 2 byte overhead per extID).

Returns **[number][49]** The entry raw size in bytes.

### remainingFreeBytes

[src/entry.js:91-98][58]

Get the number of bytes that can be added to the entry for the same EC cost.

Returns **[number][49]** Remaining number of free bytes.

### remainingMaxBytes

[src/entry.js:104-111][59]

Get the number of bytes that can be added to the entry before hitting the maximum (10kb).

Returns **[number][49]** Maximum number of bytes that can still be added to the entry.

### hash

[src/entry.js:117-120][60]

Get hash of the entry.

Returns **[Buffer][47]** Hash of the entry.

### hashHex

[src/entry.js:125-127][61]

Returns **[string][52]** Hash of the entry as hex encoded string.

### marshalBinary

[src/entry.js:133-141][62]

Returns **[Buffer][47]** Result of marshaling the entry.

### marshalBinaryHex

[src/entry.js:146-148][63]

Returns **[Buffer][47]** Result of marshaling the entry as hex encoded string.

### ecCost

[src/entry.js:154-161][64]

Get Entry Credit cost of the entry.

Returns **[number][49]** EC cost of the entry.

### builder

[src/entry.js:168-170][65]

Entry builder static factory.

#### Parameters

-   `entry` **[Entry][66]?** Optional entry to use to initialize the attributes of the builder.

Returns **[EntryBuilder][46]** A new EntryBuilder.

## EntryBuilder

[src/entry.js:181-271][67]

Class to build an [Entry][1]

### Parameters

-   `entry` **[Entry][66]?** Optional entry to use to initialize the attributes of the builder.

### content

[src/entry.js:201-206][68]

Set content.

#### Parameters

-   `content` **([string][52] \| [Buffer][47])** | Content.
-   `enc` **[string][52]** Encoding of the content if it is a string. (optional, default `hex`)

Returns **[EntryBuilder][46]** EntryBuilder instance.

### chainId

[src/entry.js:213-218][69]

Set chain ID.

#### Parameters

-   `chainId` **([string][52] \| [Buffer][47])** Chain ID.
-   `enc` **[string][52]** Encoding of the chainId if it is a string. (optional, default `hex`)

Returns **[EntryBuilder][46]** EntryBuilder instance.

### extIds

[src/entry.js:225-230][70]

Set external IDs.

#### Parameters

-   `extIds` **([Array][48]&lt;[string][52]> | [Array][48]&lt;[Buffer][47]>)** External IDs.
-   `enc` **[string][52]** Encoding of the external ids if they are strings. (optional, default `hex`)

Returns **[EntryBuilder][46]** EntryBuilder instance.

### extId

[src/entry.js:237-242][71]

Add an external ID.

#### Parameters

-   `extId` **([string][52] \| [Buffer][47])** External ID.
-   `enc` **[string][52]** Encoding of the external id if it is a string. (optional, default `hex`)

Returns **[EntryBuilder][46]** EntryBuilder instance.

### timestamp

[src/entry.js:249-252][72]

Set explicit timestamp for the entry commit. 
If not set the library will use Date.now() as the commit timestamp.

#### Parameters

-   `timestamp` **[number][49]** Timestamp in milliseconds.

Returns **[EntryBuilder][46]** EntryBuilder instance.

### blockContext

[src/entry.js:260-263][73]

Set block context. This method is used internally by the library to populate a block context, 
regular users should not have to use this.

#### Parameters

-   `blockContext` **[EntryBlockContext][50]** 

Returns **[EntryBuilder][46]** EntryBuilder instance.

### build

[src/entry.js:268-270][74]

Returns **[Entry][66]** Built entry.

## EntryBlockContext

[src/entry.js:287-294][75]

Block context of an [Entry][1].

Type: [Object][76]

### Properties

-   `entryTimestamp` **[number][49]** Epoch timestamp (in seconds) of the entry.
-   `directoryBlockHeight` **[number][49]** Directory Block height.
-   `entryBlockTimestamp` **[number][49]** Epoch timestamp (in seconds) of the Entry Block.
-   `entryBlockSequenceNumber` **[number][49]** Entry Block sequence number.
-   `entryBlockKeyMR` **[string][52]** Entry Block KeyMR.

## composeEntryCommit

[src/entry.js:317-345][77]

Compose the commit of an Entry, that can then be used as input of the factomd API `commit-entry`.
Note that if the Entry doen't have a timestamp set the library will use Date.now() as the default for the commit timestamp.

### Parameters

-   `entry` **[Entry][66]** Entry to compose the commit of.
-   `ecAddress` **[string][52]** Entry Credit address that pays for the commit, either private (Es) or public (EC). If a public EC address is provided it is necessary to manually pass the signature of the commit as a 3rd argument (use case for hardware wallets)
-   `sig` **([string][52] \| [Buffer][47])?** Optional signature of the commit (composeEntryLedger). Only necessary if a public EC address was passed as 2nd argument.

Returns **[Buffer][47]** Entry commit.

## composeEntryReveal

[src/entry.js:365-368][78]

Compose the reveal of an Entry, that can then be used as input of the factomd API `reveal-entry`.

### Parameters

-   `entry` **[Entry][66]** Entry to compose the reveal of.

Returns **[Buffer][47]** Entry reveal.

## composeEntry

[src/entry.js:377-384][79]

Compose the commit and reveal of an Entry, that can then be used as inputs of the factomd APIs `commit-entry` and `reveal-entry`.

### Parameters

-   `entry` **[Entry][66]** Entry to compose the commit and reveal of.
-   `ecAddress` **[string][52]** Entry Credit address that pays for the commit, either private (Es) or public (EC). If a public EC address is provided it is necessary to manually pass the signature of the commit as a 3rd argument (use case for hardware wallets)
-   `signature` **([string][52] \| [Buffer][47])?** Optional signature of the commit (composeEntryLedger). Only necessary if a public EC address was passed as 2nd argument.

Returns **{commit: [Buffer][47], reveal: [Buffer][47]}** Entry commit and reveal.

## computeEntryTxId

[src/entry.js:402-405][80]

Compute the transaxtion id of the Entry commit. The transaction ID is dependent on the timestamp set in the entry.
If the timestamp is not set the library uses Date.now() as the default, changing the result of this function if called at different times.

### Parameters

-   `entry` **[Entry][66]** 

Returns **[Buffer][47]** The transaction id of the Entry commit.

[1]: #entry

[2]: #parameters

[3]: #properties

[4]: #examples

[5]: #chainidhex

[6]: #contenthex

[7]: #extidshex

[8]: #size

[9]: #payloadsize

[10]: #rawdatasize

[11]: #remainingfreebytes

[12]: #remainingmaxbytes

[13]: #hash

[14]: #hashhex

[15]: #marshalbinary

[16]: #marshalbinaryhex

[17]: #eccost

[18]: #builder

[19]: #parameters-1

[20]: #entrybuilder

[21]: #parameters-2

[22]: #content

[23]: #parameters-3

[24]: #chainid

[25]: #parameters-4

[26]: #extids

[27]: #parameters-5

[28]: #extid

[29]: #parameters-6

[30]: #timestamp

[31]: #parameters-7

[32]: #blockcontext

[33]: #parameters-8

[34]: #build

[35]: #entryblockcontext

[36]: #properties-1

[37]: #composeentrycommit

[38]: #parameters-9

[39]: #composeentryreveal

[40]: #parameters-10

[41]: #composeentry

[42]: #parameters-11

[43]: #computeentrytxid

[44]: #parameters-12

[45]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L26-L171 "Source code on GitHub"

[46]: #entrybuilder

[47]: https://nodejs.org/api/buffer.html

[48]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[49]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[50]: #entryblockcontext

[51]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L43-L45 "Source code on GitHub"

[52]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[53]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L50-L52 "Source code on GitHub"

[54]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L57-L59 "Source code on GitHub"

[55]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L66-L69 "Source code on GitHub"

[56]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L75-L77 "Source code on GitHub"

[57]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L83-L85 "Source code on GitHub"

[58]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L91-L98 "Source code on GitHub"

[59]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L104-L111 "Source code on GitHub"

[60]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L117-L120 "Source code on GitHub"

[61]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L125-L127 "Source code on GitHub"

[62]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L133-L141 "Source code on GitHub"

[63]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L146-L148 "Source code on GitHub"

[64]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L154-L161 "Source code on GitHub"

[65]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L168-L170 "Source code on GitHub"

[66]: #entry

[67]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L181-L271 "Source code on GitHub"

[68]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L201-L206 "Source code on GitHub"

[69]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L213-L218 "Source code on GitHub"

[70]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L225-L230 "Source code on GitHub"

[71]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L237-L242 "Source code on GitHub"

[72]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L249-L252 "Source code on GitHub"

[73]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L260-L263 "Source code on GitHub"

[74]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L268-L270 "Source code on GitHub"

[75]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L273-L281 "Source code on GitHub"

[76]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[77]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L317-L345 "Source code on GitHub"

[78]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L365-L368 "Source code on GitHub"

[79]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L377-L384 "Source code on GitHub"

[80]: https://git@github.com/:PaulBernier/factomjs/blob/cd63b7b355885a84c0895a72117ddf2e8b0a8ec8/src/entry.js#L402-L405 "Source code on GitHub"