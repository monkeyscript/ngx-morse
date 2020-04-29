# Ngx-Morse

A simple morse code encoder and decoder for Angluar.

Demo : [https://monkeyscript.github.io/ngx-morse/](https://monkeyscript.github.io/ngx-morse/)

## Installation

Using npm :

```
$ Not deployed
```

## Usage

Import and use `NgxMorseService` in your component. It's that simple :)

```typescript 
import { NgxMorseService } from 'ngx-morse';
 
@Component({...})

export class YourComponent {
  
  constructor(private morse: NgxMorseService) {}
 
  encode() {
    let encoded = this.morse.encode('Hello world!');
    //
  }

  decode() {
    let decoded = this.morse.decode('Hello world!');
    // 
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

## Todo

- Demo app
- Lib cleanup
- Special characters
- Favicon
- Independent test
- Font