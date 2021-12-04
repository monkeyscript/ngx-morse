# Ngx-Morse

![npm](https://img.shields.io/npm/v/ngx-morse)
![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-morse)
![NPM](https://img.shields.io/npm/l/ngx-morse)

A simple morse code encoder and decoder for Angular.

Demo : [https://monkeyscript.github.io/ngx-morse/](https://monkeyscript.github.io/ngx-morse/)

## Installation

Using npm :

```
$ npm i ngx-morse
```

## Usage

Import and use `NgxMorseService` in your component. It's that simple :)

```typescript 
import { NgxMorseService } from 'ngx-morse';
 
@Component({...})

export class YourComponent {
  
  constructor(private morse: NgxMorseService) {}
 
  encode() {
    let encoded = this.morse.encode('hello world!');
    // .... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--
  }

  decode() {
    let decoded = this.morse.decode('.... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--');
    // hello world!
  }

}

```

## Methods

- **encode()** : Takes a text as input and returns its morse code.

- **decode()** : Takes a morse code as input and returns its text value.

## Issues & Contributions

For a new feature, create an issue [here](https://github.com/monkeyscript/ngx-morse/issues). Open to all contributions :)

## License 

Apache-2.0. Please see the [license file](https://github.com/monkeyscript/ngx-morse/blob/master/LICENSE) for more information.
