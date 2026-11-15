# Ngx-Morse

[![npm version](https://img.shields.io/npm/v/ngx-morse.svg)](https://www.npmjs.com/package/ngx-morse)
[![npm downloads](https://img.shields.io/npm/dm/ngx-morse.svg)](https://www.npmjs.com/package/ngx-morse)
[![license](https://img.shields.io/npm/l/ngx-morse.svg)](https://github.com/monkeyscript/ngx-morse/blob/master/LICENSE)

A lightweight, strongly-typed Morse code encoder and decoder library for Angular. Supports both service-based calls and standalone Angular pipes.

**Interactive Demo:** [https://monkeyscript.github.io/ngx-morse/](https://monkeyscript.github.io/ngx-morse/)

---

## Features

- **Bidirectional Conversion:** Encode plain text to Morse code and decode Morse code back to plain text.
- **Standalone Pipes:** Use `morseEncode` and `morseDecode` directly in Angular templates.
- **Tree-Shakable:** `"sideEffects": false` with modern ESM partial compilation.
- **Wide Angular Compatibility:** Supports Angular 16 through Angular 22+.
- **Zero Dependencies:** Only peer dependencies on `@angular/core` and `@angular/common`.

---

## Installation

```bash
npm install ngx-morse
```

---

## Quick Start

### 1. Using `NgxMorseService`

```typescript
import { Component, inject } from '@angular/core';
import { NgxMorseService } from 'ngx-morse';

@Component({
  selector: 'app-example',
  standalone: true,
  template: `
    <div>
      <p>Encoded: {{ encoded }}</p>
      <p>Decoded: {{ decoded }}</p>
    </div>
  `
})
export class ExampleComponent {
  private morse = inject(NgxMorseService);

  encoded = this.morse.encode('Hello World!');
  // Output: '.... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.-- '

  decoded = this.morse.decode('.... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.-- ');
  // Output: 'hello world!'
}
```

### 2. Using Standalone Pipes

```typescript
import { Component } from '@angular/core';
import { MorseEncodePipe, MorseDecodePipe } from 'ngx-morse';

@Component({
  selector: 'app-pipe-example',
  standalone: true,
  imports: [MorseEncodePipe, MorseDecodePipe],
  template: `
    <p>{{ 'SOS' | morseEncode }}</p>
    <!-- Outputs: ... --- ...  -->

    <p>{{ '... --- ... ' | morseDecode }}</p>
    <!-- Outputs: sos -->
  `
})
export class PipeExampleComponent {}
```

### 3. Using with NgModule (Legacy Applications)

```typescript
import { NgModule } from '@angular/core';
import { NgxMorseModule } from 'ngx-morse';

@NgModule({
  imports: [NgxMorseModule]
})
export class AppModule {}
```

---

## API Reference

### `NgxMorseService`

| Method | Parameters | Return Type | Description |
| :--- | :--- | :--- | :--- |
| `encode(message: string)` | `message: string` | `string` | Encodes plain text into Morse code. Characters are separated by a space. Throws `InvalidInputError` on unsupported characters. |
| `decode(message: string)` | `message: string` | `string` | Decodes a Morse code string back to lower-case plain text. Throws `InvalidInputError` on invalid Morse sequences. |

### Standalone Pipes

| Pipe | Input | Output | Description |
| :--- | :--- | :--- | :--- |
| `morseEncode` | `string \| null \| undefined` | `string` | Encodes string to Morse code. Returns empty string for falsy input. |
| `morseDecode` | `string \| null \| undefined` | `string` | Decodes Morse code to plain text. Returns empty string for falsy input. |

### Error Handling

The library exports `InvalidInputError` which is thrown when encountering invalid characters during encoding or corrupted code during decoding:

```typescript
import { NgxMorseService, InvalidInputError } from 'ngx-morse';

try {
  morse.encode('Unsupported character: ~');
} catch (err) {
  if (err instanceof InvalidInputError) {
    console.error('Invalid character detected:', err.message);
  }
}
```

---

## License

Apache-2.0. See [LICENSE](https://github.com/monkeyscript/ngx-morse/blob/master/LICENSE) for details.
