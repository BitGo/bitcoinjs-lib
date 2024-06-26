export const fixtures = {
  bip174: {
    invalid: [
      {
        description: 'Network transaction, not PSBT format',
        errorMessage: 'Format Error: Invalid Magic Number',
        psbt:
          'AgAAAAEmgXE3Ht/yhek3re6ks3t4AAwFZsuzrWRkFxPKQhcb9gAAAABqRzBEAiBwsiRRI+a/R01gxbUMBD1MaRpdJDXwmjSnZiqdwlF5CgIgATKcqdrPKAvfMHQOwDkEIkIsgctFg5RXrrdvwS7dlbMBIQJlfRGNM1e44PTCzUbbezn22cONmnCry5st5dyNv+TOMf7///8C09/1BQAAAAAZdqkU0MWZA8W6woaHYOkP1SGkZlqnZSCIrADh9QUAAAAAF6kUNUXm4zuDLEcFDyTT7rk8nAOUi8eHsy4TAA==',
      },
      {
        description: 'PSBT missing outputs',
        errorMessage: 'Format Error: Unexpected End of PSBT',
        psbt:
          'cHNidP8BAHUCAAAAASaBcTce3/KF6Tet7qSze3gADAVmy7OtZGQXE8pCFxv2AAAAAAD+////AtPf9QUAAAAAGXapFNDFmQPFusKGh2DpD9UhpGZap2UgiKwA4fUFAAAAABepFDVF5uM7gyxHBQ8k0+65PJwDlIvHh7MuEwAAAQD9pQEBAAAAAAECiaPHHqtNIOA3G7ukzGmPopXJRjr6Ljl/hTPMti+VZ+UBAAAAFxYAFL4Y0VKpsBIDna89p95PUzSe7LmF/////4b4qkOnHf8USIk6UwpyN+9rRgi7st0tAXHmOuxqSJC0AQAAABcWABT+Pp7xp0XpdNkCxDVZQ6vLNL1TU/////8CAMLrCwAAAAAZdqkUhc/xCX/Z4Ai7NK9wnGIZeziXikiIrHL++E4sAAAAF6kUM5cluiHv1irHU6m80GfWx6ajnQWHAkcwRAIgJxK+IuAnDzlPVoMR3HyppolwuAJf3TskAinwf4pfOiQCIAGLONfc0xTnNMkna9b7QPZzMlvEuqFEyADS8vAtsnZcASED0uFWdJQbrUqZY3LLh+GFbTZSYG2YVi/jnF6efkE/IQUCSDBFAiEA0SuFLYXc2WHS9fSrZgZU327tzHlMDDPOXMMJ/7X85Y0CIGczio4OFyXBl/saiK9Z9R5E5CVbIBZ8hoQDHAXR8lkqASECI7cr7vCWXRC+B3jv7NYfysb3mk6haTkzgHNEZPhPKrMAAAAAAA==',
      },
      {
        description:
          'PSBT where one input has a filled scriptSig in the unsigned tx',
        errorMessage: 'Format Error: Transaction ScriptSigs are not empty',
        psbt:
          'cHNidP8BAP0KAQIAAAACqwlJoIxa98SbghL0F+LxWrP1wz3PFTghqBOfh3pbe+QAAAAAakcwRAIgR1lmF5fAGwNrJZKJSGhiGDR9iYZLcZ4ff89X0eURZYcCIFMJ6r9Wqk2Ikf/REf3xM286KdqGbX+EhtdVRs7tr5MZASEDXNxh/HupccC1AaZGoqg7ECy0OIEhfKaC3Ibi1z+ogpL+////qwlJoIxa98SbghL0F+LxWrP1wz3PFTghqBOfh3pbe+QBAAAAAP7///8CYDvqCwAAAAAZdqkUdopAu9dAy+gdmI5x3ipNXHE5ax2IrI4kAAAAAAAAGXapFG9GILVT+glechue4O/p+gOcykWXiKwAAAAAAAABASAA4fUFAAAAABepFDVF5uM7gyxHBQ8k0+65PJwDlIvHhwEEFgAUhdE1N/LiZUBaNNuvqePdoB+4IwgAAAA=',
      },
      {
        description:
          'PSBT where inputs and outputs are provided but without an unsigned tx',
        errorMessage: 'Format Error: Only one UNSIGNED_TX allowed',
        psbt:
          'cHNidP8AAQD9pQEBAAAAAAECiaPHHqtNIOA3G7ukzGmPopXJRjr6Ljl/hTPMti+VZ+UBAAAAFxYAFL4Y0VKpsBIDna89p95PUzSe7LmF/////4b4qkOnHf8USIk6UwpyN+9rRgi7st0tAXHmOuxqSJC0AQAAABcWABT+Pp7xp0XpdNkCxDVZQ6vLNL1TU/////8CAMLrCwAAAAAZdqkUhc/xCX/Z4Ai7NK9wnGIZeziXikiIrHL++E4sAAAAF6kUM5cluiHv1irHU6m80GfWx6ajnQWHAkcwRAIgJxK+IuAnDzlPVoMR3HyppolwuAJf3TskAinwf4pfOiQCIAGLONfc0xTnNMkna9b7QPZzMlvEuqFEyADS8vAtsnZcASED0uFWdJQbrUqZY3LLh+GFbTZSYG2YVi/jnF6efkE/IQUCSDBFAiEA0SuFLYXc2WHS9fSrZgZU327tzHlMDDPOXMMJ/7X85Y0CIGczio4OFyXBl/saiK9Z9R5E5CVbIBZ8hoQDHAXR8lkqASECI7cr7vCWXRC+B3jv7NYfysb3mk6haTkzgHNEZPhPKrMAAAAAAA==',
      },
      {
        description: 'PSBT with duplicate keys in an input',
        errorMessage:
          'Format Error: Keys must be unique for each input: input index 0 key 00',
        psbt:
          'cHNidP8BAHUCAAAAASaBcTce3/KF6Tet7qSze3gADAVmy7OtZGQXE8pCFxv2AAAAAAD+////AtPf9QUAAAAAGXapFNDFmQPFusKGh2DpD9UhpGZap2UgiKwA4fUFAAAAABepFDVF5uM7gyxHBQ8k0+65PJwDlIvHh7MuEwAAAQD9pQEBAAAAAAECiaPHHqtNIOA3G7ukzGmPopXJRjr6Ljl/hTPMti+VZ+UBAAAAFxYAFL4Y0VKpsBIDna89p95PUzSe7LmF/////4b4qkOnHf8USIk6UwpyN+9rRgi7st0tAXHmOuxqSJC0AQAAABcWABT+Pp7xp0XpdNkCxDVZQ6vLNL1TU/////8CAMLrCwAAAAAZdqkUhc/xCX/Z4Ai7NK9wnGIZeziXikiIrHL++E4sAAAAF6kUM5cluiHv1irHU6m80GfWx6ajnQWHAkcwRAIgJxK+IuAnDzlPVoMR3HyppolwuAJf3TskAinwf4pfOiQCIAGLONfc0xTnNMkna9b7QPZzMlvEuqFEyADS8vAtsnZcASED0uFWdJQbrUqZY3LLh+GFbTZSYG2YVi/jnF6efkE/IQUCSDBFAiEA0SuFLYXc2WHS9fSrZgZU327tzHlMDDPOXMMJ/7X85Y0CIGczio4OFyXBl/saiK9Z9R5E5CVbIBZ8hoQDHAXR8lkqASECI7cr7vCWXRC+B3jv7NYfysb3mk6haTkzgHNEZPhPKrMAAAAAAQA/AgAAAAH//////////////////////////////////////////wAAAAAA/////wEAAAAAAAAAAANqAQAAAAAAAAAA',
      },
      {
        description: 'PSBT With invalid global transaction typed key',
        errorMessage: 'Format Error: Invalid global key: 0001',
        psbt:
          'cHNidP8CAAFVAgAAAAEnmiMjpd+1H8RfIg+liw/BPh4zQnkqhdfjbNYzO1y8OQAAAAAA/////wGgWuoLAAAAABl2qRT/6cAGEJfMO2NvLLBGD6T8Qn0rRYisAAAAAAABASCVXuoLAAAAABepFGNFIA9o0YnhrcDfHE0W6o8UwNvrhyICA7E0HMunaDtq9PEjjNbpfnFn1Wn6xH8eSNR1QYRDVb1GRjBDAiAEJLWO/6qmlOFVnqXJO7/UqJBkIkBVzfBwtncUaUQtBwIfXI6w/qZRbWC4rLM61k7eYOh4W/s6qUuZvfhhUduamgEBBCIAIHcf0YrUWWZt1J89Vk49vEL0yEd042CtoWgWqO1IjVaBAQVHUiEDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUYhA95V0eHayAXj+KWMH7+blMAvPbqv4Sf+/KSZXyb4IIO9Uq4iBgOxNBzLp2g7avTxI4zW6X5xZ9Vp+sR/HkjUdUGEQ1W9RhC0prpnAAAAgAAAAIAEAACAIgYD3lXR4drIBeP4pYwfv5uUwC89uq/hJ/78pJlfJvggg70QtKa6ZwAAAIAAAACABQAAgAAA',
      },
      {
        description: 'PSBT With invalid input witness utxo typed key',
        errorMessage: 'Format Error: Invalid input key: 0100',
        psbt:
          'cHNidP8BAFUCAAAAASeaIyOl37UfxF8iD6WLD8E+HjNCeSqF1+Ns1jM7XLw5AAAAAAD/////AaBa6gsAAAAAGXapFP/pwAYQl8w7Y28ssEYPpPxCfStFiKwAAAAAAAIBACCVXuoLAAAAABepFGNFIA9o0YnhrcDfHE0W6o8UwNvrhyICA7E0HMunaDtq9PEjjNbpfnFn1Wn6xH8eSNR1QYRDVb1GRjBDAiAEJLWO/6qmlOFVnqXJO7/UqJBkIkBVzfBwtncUaUQtBwIfXI6w/qZRbWC4rLM61k7eYOh4W/s6qUuZvfhhUduamgEBBCIAIHcf0YrUWWZt1J89Vk49vEL0yEd042CtoWgWqO1IjVaBAQVHUiEDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUYhA95V0eHayAXj+KWMH7+blMAvPbqv4Sf+/KSZXyb4IIO9Uq4iBgOxNBzLp2g7avTxI4zW6X5xZ9Vp+sR/HkjUdUGEQ1W9RhC0prpnAAAAgAAAAIAEAACAIgYD3lXR4drIBeP4pYwfv5uUwC89uq/hJ/78pJlfJvggg70QtKa6ZwAAAIAAAACABQAAgAAA',
      },
      {
        description:
          'PSBT With invalid pubkey length for input partial signature typed key',
        errorMessage:
          'Format Error: invalid pubkey in key 0x0203b1341ccba7683b6af4f1238cd6e97e7167d569fac47f1e48d47541844355bd',
        psbt:
          'cHNidP8BAFUCAAAAASeaIyOl37UfxF8iD6WLD8E+HjNCeSqF1+Ns1jM7XLw5AAAAAAD/////AaBa6gsAAAAAGXapFP/pwAYQl8w7Y28ssEYPpPxCfStFiKwAAAAAAAEBIJVe6gsAAAAAF6kUY0UgD2jRieGtwN8cTRbqjxTA2+uHIQIDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUYwQwIgBCS1jv+qppThVZ6lyTu/1KiQZCJAVc3wcLZ3FGlELQcCH1yOsP6mUW1guKyzOtZO3mDoeFv7OqlLmb34YVHbmpoBAQQiACB3H9GK1FlmbdSfPVZOPbxC9MhHdONgraFoFqjtSI1WgQEFR1IhA7E0HMunaDtq9PEjjNbpfnFn1Wn6xH8eSNR1QYRDVb1GIQPeVdHh2sgF4/iljB+/m5TALz26r+En/vykmV8m+CCDvVKuIgYDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUYQtKa6ZwAAAIAAAACABAAAgCIGA95V0eHayAXj+KWMH7+blMAvPbqv4Sf+/KSZXyb4IIO9ELSmumcAAACAAAAAgAUAAIAAAA==',
      },
      {
        description: 'PSBT With invalid redeemscript typed key',
        errorMessage: 'Format Error: Invalid input key: 0400',
        psbt:
          'cHNidP8BAFUCAAAAASeaIyOl37UfxF8iD6WLD8E+HjNCeSqF1+Ns1jM7XLw5AAAAAAD/////AaBa6gsAAAAAGXapFP/pwAYQl8w7Y28ssEYPpPxCfStFiKwAAAAAAAEBIJVe6gsAAAAAF6kUY0UgD2jRieGtwN8cTRbqjxTA2+uHIgIDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUZGMEMCIAQktY7/qqaU4VWepck7v9SokGQiQFXN8HC2dxRpRC0HAh9cjrD+plFtYLisszrWTt5g6Hhb+zqpS5m9+GFR25qaAQIEACIAIHcf0YrUWWZt1J89Vk49vEL0yEd042CtoWgWqO1IjVaBAQVHUiEDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUYhA95V0eHayAXj+KWMH7+blMAvPbqv4Sf+/KSZXyb4IIO9Uq4iBgOxNBzLp2g7avTxI4zW6X5xZ9Vp+sR/HkjUdUGEQ1W9RhC0prpnAAAAgAAAAIAEAACAIgYD3lXR4drIBeP4pYwfv5uUwC89uq/hJ/78pJlfJvggg70QtKa6ZwAAAIAAAACABQAAgAAA',
      },
      {
        description: 'PSBT With invalid witnessscript typed key',
        errorMessage: 'Format Error: Invalid input key: 0500',
        psbt:
          'cHNidP8BAFUCAAAAASeaIyOl37UfxF8iD6WLD8E+HjNCeSqF1+Ns1jM7XLw5AAAAAAD/////AaBa6gsAAAAAGXapFP/pwAYQl8w7Y28ssEYPpPxCfStFiKwAAAAAAAEBIJVe6gsAAAAAF6kUY0UgD2jRieGtwN8cTRbqjxTA2+uHIgIDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUZGMEMCIAQktY7/qqaU4VWepck7v9SokGQiQFXN8HC2dxRpRC0HAh9cjrD+plFtYLisszrWTt5g6Hhb+zqpS5m9+GFR25qaAQEEIgAgdx/RitRZZm3Unz1WTj28QvTIR3TjYK2haBao7UiNVoECBQBHUiEDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUYhA95V0eHayAXj+KWMH7+blMAvPbqv4Sf+/KSZXyb4IIO9Uq4iBgOxNBzLp2g7avTxI4zW6X5xZ9Vp+sR/HkjUdUGEQ1W9RhC0prpnAAAAgAAAAIAEAACAIgYD3lXR4drIBeP4pYwfv5uUwC89uq/hJ/78pJlfJvggg70QtKa6ZwAAAIAAAACABQAAgAAA',
      },
      {
        description: 'PSBT With invalid bip32 typed key',
        errorMessage:
          'Format Error: invalid pubkey in key 0x0603b1341ccba7683b6af4f1238cd6e97e7167d569fac47f1e48d47541844355bd',
        psbt:
          'cHNidP8BAFUCAAAAASeaIyOl37UfxF8iD6WLD8E+HjNCeSqF1+Ns1jM7XLw5AAAAAAD/////AaBa6gsAAAAAGXapFP/pwAYQl8w7Y28ssEYPpPxCfStFiKwAAAAAAAEBIJVe6gsAAAAAF6kUY0UgD2jRieGtwN8cTRbqjxTA2+uHIgIDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUZGMEMCIAQktY7/qqaU4VWepck7v9SokGQiQFXN8HC2dxRpRC0HAh9cjrD+plFtYLisszrWTt5g6Hhb+zqpS5m9+GFR25qaAQEEIgAgdx/RitRZZm3Unz1WTj28QvTIR3TjYK2haBao7UiNVoEBBUdSIQOxNBzLp2g7avTxI4zW6X5xZ9Vp+sR/HkjUdUGEQ1W9RiED3lXR4drIBeP4pYwfv5uUwC89uq/hJ/78pJlfJvggg71SriEGA7E0HMunaDtq9PEjjNbpfnFn1Wn6xH8eSNR1QYRDVb0QtKa6ZwAAAIAAAACABAAAgCIGA95V0eHayAXj+KWMH7+blMAvPbqv4Sf+/KSZXyb4IIO9ELSmumcAAACAAAAAgAUAAIAAAA==',
      },
      {
        description: 'PSBT With invalid non-witness utxo typed key',
        errorMessage: 'Format Error: Invalid input key: 0000',
        psbt:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAIAALsCAAAAAarXOTEBi9JfhK5AC2iEi+CdtwbqwqwYKYur7nGrZW+LAAAAAEhHMEQCIFj2/HxqM+GzFUjUgcgmwBW9MBNarULNZ3kNq2bSrSQ7AiBKHO0mBMZzW2OT5bQWkd14sA8MWUL7n3UYVvqpOBV9ugH+////AoDw+gIAAAAAF6kUD7lGNCFpa4LIM68kHHjBfdveSTSH0PIKJwEAAAAXqRQpynT4oI+BmZQoGFyXtdhS5AY/YYdlAAAAAQfaAEcwRAIgdAGK1BgAl7hzMjwAFXILNoTMgSOJEEjn282bVa1nnJkCIHPTabdA4+tT3O+jOCPIBwUUylWn3ZVE8VfBZ5EyYRGMAUgwRQIhAPYQOLMI3B2oZaNIUnRvAVdyk0IIxtJEVDk82ZvfIhd3AiAFbmdaZ1ptCgK4WxTl4pB02KJam1dgvqKBb2YZEKAG6gFHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4AAQEgAMLrCwAAAAAXqRS39fr0Dj1ApaRZsds1NfK3L6kh6IcBByMiACCMI1MXN0O1ld+0oHtyuo5C43l9p06H/n2ddJfjsgKJAwEI2gQARzBEAiBi63pVYQenxz9FrEq1od3fb3B1+xJ1lpp/OD7/94S8sgIgDAXbt0cNvy8IVX3TVscyXB7TCRPpls04QJRdsSIo2l8BRzBEAiBl9FulmYtZon/+GnvtAWrx8fkNVLOqj3RQql9WolEDvQIgf3JHA60e25ZoCyhLVtT/y4j3+3Weq74IqjDym4UTg9IBR1IhAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcIQI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc1KuACICA6mkw39ZltOqJdusa1cK8GUDlEkpQkYLNUdT7Z7spYdxENkMak8AAACAAAAAgAQAAIAAIgICf2OZdX0u/1WhNq0CxoSxg4tlVuXxtrNCgqlLa1AFEJYQ2QxqTwAAAIAAAACABQAAgAA=',
      },
      {
        description: 'PSBT With invalid final scriptsig typed key',
        errorMessage: 'Format Error: Invalid input key: 0700',
        psbt:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAACBwDaAEcwRAIgdAGK1BgAl7hzMjwAFXILNoTMgSOJEEjn282bVa1nnJkCIHPTabdA4+tT3O+jOCPIBwUUylWn3ZVE8VfBZ5EyYRGMAUgwRQIhAPYQOLMI3B2oZaNIUnRvAVdyk0IIxtJEVDk82ZvfIhd3AiAFbmdaZ1ptCgK4WxTl4pB02KJam1dgvqKBb2YZEKAG6gFHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4AAQEgAMLrCwAAAAAXqRS39fr0Dj1ApaRZsds1NfK3L6kh6IcBByMiACCMI1MXN0O1ld+0oHtyuo5C43l9p06H/n2ddJfjsgKJAwEI2gQARzBEAiBi63pVYQenxz9FrEq1od3fb3B1+xJ1lpp/OD7/94S8sgIgDAXbt0cNvy8IVX3TVscyXB7TCRPpls04QJRdsSIo2l8BRzBEAiBl9FulmYtZon/+GnvtAWrx8fkNVLOqj3RQql9WolEDvQIgf3JHA60e25ZoCyhLVtT/y4j3+3Weq74IqjDym4UTg9IBR1IhAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcIQI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc1KuACICA6mkw39ZltOqJdusa1cK8GUDlEkpQkYLNUdT7Z7spYdxENkMak8AAACAAAAAgAQAAIAAIgICf2OZdX0u/1WhNq0CxoSxg4tlVuXxtrNCgqlLa1AFEJYQ2QxqTwAAAIAAAACABQAAgAA=',
      },
      {
        description: 'PSBT With invalid final script witness typed key',
        errorMessage: 'Format Error: Invalid input key: 0800',
        psbt:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABB9oARzBEAiB0AYrUGACXuHMyPAAVcgs2hMyBI4kQSOfbzZtVrWecmQIgc9Npt0Dj61Pc76M4I8gHBRTKVafdlUTxV8FnkTJhEYwBSDBFAiEA9hA4swjcHahlo0hSdG8BV3KTQgjG0kRUOTzZm98iF3cCIAVuZ1pnWm0KArhbFOXikHTYolqbV2C+ooFvZhkQoAbqAUdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSrgABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohwEHIyIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAggA2gQARzBEAiBi63pVYQenxz9FrEq1od3fb3B1+xJ1lpp/OD7/94S8sgIgDAXbt0cNvy8IVX3TVscyXB7TCRPpls04QJRdsSIo2l8BRzBEAiBl9FulmYtZon/+GnvtAWrx8fkNVLOqj3RQql9WolEDvQIgf3JHA60e25ZoCyhLVtT/y4j3+3Weq74IqjDym4UTg9IBR1IhAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcIQI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc1KuACICA6mkw39ZltOqJdusa1cK8GUDlEkpQkYLNUdT7Z7spYdxENkMak8AAACAAAAAgAQAAIAAIgICf2OZdX0u/1WhNq0CxoSxg4tlVuXxtrNCgqlLa1AFEJYQ2QxqTwAAAIAAAACABQAAgAA=',
      },
      {
        description:
          'PSBT With invalid pubkey in output BIP 32 derivation paths typed key',
        errorMessage:
          'Format Error: invalid pubkey in key 0x0203a9a4c37f5996d3aa25dbac6b570af0650394492942460b354753ed9eeca587',
        psbt:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABB9oARzBEAiB0AYrUGACXuHMyPAAVcgs2hMyBI4kQSOfbzZtVrWecmQIgc9Npt0Dj61Pc76M4I8gHBRTKVafdlUTxV8FnkTJhEYwBSDBFAiEA9hA4swjcHahlo0hSdG8BV3KTQgjG0kRUOTzZm98iF3cCIAVuZ1pnWm0KArhbFOXikHTYolqbV2C+ooFvZhkQoAbqAUdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSrgABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohwEHIyIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQjaBABHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwFHMEQCIGX0W6WZi1mif/4ae+0BavHx+Q1Us6qPdFCqX1aiUQO9AiB/ckcDrR7blmgLKEtW1P/LiPf7dZ6rvgiqMPKbhROD0gFHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4AIQIDqaTDf1mW06ol26xrVwrwZQOUSSlCRgs1R1PtnuylhxDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
      },
      {
        description: 'PSBT With invalid input sighash type typed key',
        errorMessage: 'Format Error: Invalid input key: 0300',
        psbt:
          'cHNidP8BAHMCAAAAATAa6YblFqHsisW0vGVz0y+DtGXiOtdhZ9aLOOcwtNvbAAAAAAD/////AnR7AQAAAAAAF6kUA6oXrogrXQ1Usl1jEE5P/s57nqKHYEOZOwAAAAAXqRS5IbG6b3IuS/qDtlV6MTmYakLsg4cAAAAAAAEBHwDKmjsAAAAAFgAU0tlLZK4IWH7vyO6xh8YB6Tn5A3wCAwABAAAAAAEAFgAUYunpgv/zTdgjlhAxawkM0qO3R8sAAQAiACCHa62DLx0WgBXtQSMqnqZaGBXZ7xPA74dZ9ktbKyeKZQEBJVEhA7fOI6AcW0vwCmQlN836uzFbZoMyhnR471EwnSvVf4qHUa4A',
      },
      {
        description: 'PSBT With invalid output redeemScript typed key',
        errorMessage: 'Format Error: Invalid output key: 0000',
        psbt:
          'cHNidP8BAHMCAAAAATAa6YblFqHsisW0vGVz0y+DtGXiOtdhZ9aLOOcwtNvbAAAAAAD/////AnR7AQAAAAAAF6kUA6oXrogrXQ1Usl1jEE5P/s57nqKHYEOZOwAAAAAXqRS5IbG6b3IuS/qDtlV6MTmYakLsg4cAAAAAAAEBHwDKmjsAAAAAFgAU0tlLZK4IWH7vyO6xh8YB6Tn5A3wAAgAAFgAUYunpgv/zTdgjlhAxawkM0qO3R8sAAQAiACCHa62DLx0WgBXtQSMqnqZaGBXZ7xPA74dZ9ktbKyeKZQEBJVEhA7fOI6AcW0vwCmQlN836uzFbZoMyhnR471EwnSvVf4qHUa4A',
      },
      {
        description: 'PSBT With invalid output witnessScript typed key',
        errorMessage: 'Format Error: Unexpected End of PSBT',
        psbt:
          'cHNidP8BAHMCAAAAATAa6YblFqHsisW0vGVz0y+DtGXiOtdhZ9aLOOcwtNvbAAAAAAD/////AnR7AQAAAAAAF6kUA6oXrogrXQ1Usl1jEE5P/s57nqKHYEOZOwAAAAAXqRS5IbG6b3IuS/qDtlV6MTmYakLsg4cAAAAAAAEBHwDKmjsAAAAAFgAU0tlLZK4IWH7vyO6xh8YB6Tn5A3wAAQAWABRi6emC//NN2COWEDFrCQzSo7dHywABACIAIIdrrYMvHRaAFe1BIyqeploYFdnvE8Dvh1n2S1srJ4plIQEAJVEhA7fOI6AcW0vwCmQlN836uzFbZoMyhnR471EwnSvVf4qHUa4A',
      },
    ],
    valid: [
      {
        description: 'PSBT with one P2PKH input. Outputs are empty',
        psbt:
          'cHNidP8BAHUCAAAAASaBcTce3/KF6Tet7qSze3gADAVmy7OtZGQXE8pCFxv2AAAAAAD+////AtPf9QUAAAAAGXapFNDFmQPFusKGh2DpD9UhpGZap2UgiKwA4fUFAAAAABepFDVF5uM7gyxHBQ8k0+65PJwDlIvHh7MuEwAAAQD9pQEBAAAAAAECiaPHHqtNIOA3G7ukzGmPopXJRjr6Ljl/hTPMti+VZ+UBAAAAFxYAFL4Y0VKpsBIDna89p95PUzSe7LmF/////4b4qkOnHf8USIk6UwpyN+9rRgi7st0tAXHmOuxqSJC0AQAAABcWABT+Pp7xp0XpdNkCxDVZQ6vLNL1TU/////8CAMLrCwAAAAAZdqkUhc/xCX/Z4Ai7NK9wnGIZeziXikiIrHL++E4sAAAAF6kUM5cluiHv1irHU6m80GfWx6ajnQWHAkcwRAIgJxK+IuAnDzlPVoMR3HyppolwuAJf3TskAinwf4pfOiQCIAGLONfc0xTnNMkna9b7QPZzMlvEuqFEyADS8vAtsnZcASED0uFWdJQbrUqZY3LLh+GFbTZSYG2YVi/jnF6efkE/IQUCSDBFAiEA0SuFLYXc2WHS9fSrZgZU327tzHlMDDPOXMMJ/7X85Y0CIGczio4OFyXBl/saiK9Z9R5E5CVbIBZ8hoQDHAXR8lkqASECI7cr7vCWXRC+B3jv7NYfysb3mk6haTkzgHNEZPhPKrMAAAAAAAAA',
      },
      {
        description:
          'PSBT with one P2PKH input and one P2SH-P2WPKH input. First input is signed and finalized. Outputs are empty',
        psbt:
          'cHNidP8BAKACAAAAAqsJSaCMWvfEm4IS9Bfi8Vqz9cM9zxU4IagTn4d6W3vkAAAAAAD+////qwlJoIxa98SbghL0F+LxWrP1wz3PFTghqBOfh3pbe+QBAAAAAP7///8CYDvqCwAAAAAZdqkUdopAu9dAy+gdmI5x3ipNXHE5ax2IrI4kAAAAAAAAGXapFG9GILVT+glechue4O/p+gOcykWXiKwAAAAAAAEHakcwRAIgR1lmF5fAGwNrJZKJSGhiGDR9iYZLcZ4ff89X0eURZYcCIFMJ6r9Wqk2Ikf/REf3xM286KdqGbX+EhtdVRs7tr5MZASEDXNxh/HupccC1AaZGoqg7ECy0OIEhfKaC3Ibi1z+ogpIAAQEgAOH1BQAAAAAXqRQ1RebjO4MsRwUPJNPuuTycA5SLx4cBBBYAFIXRNTfy4mVAWjTbr6nj3aAfuCMIAAAA',
      },
      {
        description:
          'PSBT with one P2PKH input which has a non-final scriptSig and has a sighash type specified. Outputs are empty',
        psbt:
          'cHNidP8BAHUCAAAAASaBcTce3/KF6Tet7qSze3gADAVmy7OtZGQXE8pCFxv2AAAAAAD+////AtPf9QUAAAAAGXapFNDFmQPFusKGh2DpD9UhpGZap2UgiKwA4fUFAAAAABepFDVF5uM7gyxHBQ8k0+65PJwDlIvHh7MuEwAAAQD9pQEBAAAAAAECiaPHHqtNIOA3G7ukzGmPopXJRjr6Ljl/hTPMti+VZ+UBAAAAFxYAFL4Y0VKpsBIDna89p95PUzSe7LmF/////4b4qkOnHf8USIk6UwpyN+9rRgi7st0tAXHmOuxqSJC0AQAAABcWABT+Pp7xp0XpdNkCxDVZQ6vLNL1TU/////8CAMLrCwAAAAAZdqkUhc/xCX/Z4Ai7NK9wnGIZeziXikiIrHL++E4sAAAAF6kUM5cluiHv1irHU6m80GfWx6ajnQWHAkcwRAIgJxK+IuAnDzlPVoMR3HyppolwuAJf3TskAinwf4pfOiQCIAGLONfc0xTnNMkna9b7QPZzMlvEuqFEyADS8vAtsnZcASED0uFWdJQbrUqZY3LLh+GFbTZSYG2YVi/jnF6efkE/IQUCSDBFAiEA0SuFLYXc2WHS9fSrZgZU327tzHlMDDPOXMMJ/7X85Y0CIGczio4OFyXBl/saiK9Z9R5E5CVbIBZ8hoQDHAXR8lkqASECI7cr7vCWXRC+B3jv7NYfysb3mk6haTkzgHNEZPhPKrMAAAAAAQMEAQAAAAAAAA==',
      },
      {
        description:
          "PSBT with one P2PKH input and one P2SH-P2WPKH input both with non-final scriptSigs. P2SH-P2WPKH input's redeemScript is available. Outputs filled.",
        psbt:
          'cHNidP8BAKACAAAAAqsJSaCMWvfEm4IS9Bfi8Vqz9cM9zxU4IagTn4d6W3vkAAAAAAD+////qwlJoIxa98SbghL0F+LxWrP1wz3PFTghqBOfh3pbe+QBAAAAAP7///8CYDvqCwAAAAAZdqkUdopAu9dAy+gdmI5x3ipNXHE5ax2IrI4kAAAAAAAAGXapFG9GILVT+glechue4O/p+gOcykWXiKwAAAAAAAEA3wIAAAABJoFxNx7f8oXpN63upLN7eAAMBWbLs61kZBcTykIXG/YAAAAAakcwRAIgcLIkUSPmv0dNYMW1DAQ9TGkaXSQ18Jo0p2YqncJReQoCIAEynKnazygL3zB0DsA5BCJCLIHLRYOUV663b8Eu3ZWzASECZX0RjTNXuOD0ws1G23s59tnDjZpwq8ubLeXcjb/kzjH+////AtPf9QUAAAAAGXapFNDFmQPFusKGh2DpD9UhpGZap2UgiKwA4fUFAAAAABepFDVF5uM7gyxHBQ8k0+65PJwDlIvHh7MuEwAAAQEgAOH1BQAAAAAXqRQ1RebjO4MsRwUPJNPuuTycA5SLx4cBBBYAFIXRNTfy4mVAWjTbr6nj3aAfuCMIACICAurVlmh8qAYEPtw94RbN8p1eklfBls0FXPaYyNAr8k6ZELSmumcAAACAAAAAgAIAAIAAIgIDlPYr6d8ZlSxVh3aK63aYBhrSxKJciU9H2MFitNchPQUQtKa6ZwAAAIABAACAAgAAgAA=',
      },
      {
        description:
          'PSBT with one P2SH-P2WSH input of a 2-of-2 multisig, redeemScript, witnessScript, and keypaths are available. Contains one signature.',
        psbt:
          'cHNidP8BAFUCAAAAASeaIyOl37UfxF8iD6WLD8E+HjNCeSqF1+Ns1jM7XLw5AAAAAAD/////AaBa6gsAAAAAGXapFP/pwAYQl8w7Y28ssEYPpPxCfStFiKwAAAAAAAEBIJVe6gsAAAAAF6kUY0UgD2jRieGtwN8cTRbqjxTA2+uHIgIDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUZGMEMCIAQktY7/qqaU4VWepck7v9SokGQiQFXN8HC2dxRpRC0HAh9cjrD+plFtYLisszrWTt5g6Hhb+zqpS5m9+GFR25qaAQEEIgAgdx/RitRZZm3Unz1WTj28QvTIR3TjYK2haBao7UiNVoEBBUdSIQOxNBzLp2g7avTxI4zW6X5xZ9Vp+sR/HkjUdUGEQ1W9RiED3lXR4drIBeP4pYwfv5uUwC89uq/hJ/78pJlfJvggg71SriIGA7E0HMunaDtq9PEjjNbpfnFn1Wn6xH8eSNR1QYRDVb1GELSmumcAAACAAAAAgAQAAIAiBgPeVdHh2sgF4/iljB+/m5TALz26r+En/vykmV8m+CCDvRC0prpnAAAAgAAAAIAFAACAAAA=',
      },
      {
        description: 'PSBT with unknown types in the inputs.',
        psbt:
          'cHNidP8BAD8CAAAAAf//////////////////////////////////////////AAAAAAD/////AQAAAAAAAAAAA2oBAAAAAAAACg8BAgMEBQYHCAkPAQIDBAUGBwgJCgsMDQ4PAAA=',
      },
    ],
    failSignChecks: [
      {
        description: 'A Witness UTXO is provided for a non-witness input',
        errorMessage: 'Input #0 has witnessUtxo but non-segwit script',
        psbt:
          'cHNidP8BAKACAAAAAqsJSaCMWvfEm4IS9Bfi8Vqz9cM9zxU4IagTn4d6W3vkAAAAAAD+////qwlJoIxa98SbghL0F+LxWrP1wz3PFTghqBOfh3pbe+QBAAAAAP7///8CYDvqCwAAAAAZdqkUdopAu9dAy+gdmI5x3ipNXHE5ax2IrI4kAAAAAAAAGXapFG9GILVT+glechue4O/p+gOcykWXiKwAAAAAAAEBItPf9QUAAAAAGXapFNSO0xELlAFMsRS9Mtb00GbcdCVriKwAAQEgAOH1BQAAAAAXqRQ1RebjO4MsRwUPJNPuuTycA5SLx4cBBBYAFIXRNTfy4mVAWjTbr6nj3aAfuCMIACICAurVlmh8qAYEPtw94RbN8p1eklfBls0FXPaYyNAr8k6ZELSmumcAAACAAAAAgAIAAIAAIgIDlPYr6d8ZlSxVh3aK63aYBhrSxKJciU9H2MFitNchPQUQtKa6ZwAAAIABAACAAgAAgAA=',
        inputToCheck: 0,
      },
      {
        description:
          'redeemScript with non-witness UTXO does not match the scriptPubKey',
        errorMessage:
          "Redeem script for input #0 doesn't match the scriptPubKey in the prevout",
        psbt:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU210gwRQIhAPYQOLMI3B2oZaNIUnRvAVdyk0IIxtJEVDk82ZvfIhd3AiAFbmdaZ1ptCgK4WxTl4pB02KJam1dgvqKBb2YZEKAG6gEBAwQBAAAAAQRHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq8iBgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfxDZDGpPAAAAgAAAAIAAAACAIgYC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtcQ2QxqTwAAAIAAAACAAQAAgAABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohyICAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zRzBEAiBl9FulmYtZon/+GnvtAWrx8fkNVLOqj3RQql9WolEDvQIgf3JHA60e25ZoCyhLVtT/y4j3+3Weq74IqjDym4UTg9IBAQMEAQAAAAEEIgAgjCNTFzdDtZXftKB7crqOQuN5fadOh/59nXSX47ICiQMBBUdSIQMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3CECOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnNSriIGAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zENkMak8AAACAAAAAgAMAAIAiBgMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3BDZDGpPAAAAgAAAAIACAACAACICA6mkw39ZltOqJdusa1cK8GUDlEkpQkYLNUdT7Z7spYdxENkMak8AAACAAAAAgAQAAIAAIgICf2OZdX0u/1WhNq0CxoSxg4tlVuXxtrNCgqlLa1AFEJYQ2QxqTwAAAIAAAACABQAAgAA=',
        inputToCheck: 0,
      },
      {
        description:
          'redeemScript with witness UTXO does not match the scriptPubKey',
        errorMessage:
          "Redeem script for input #1 doesn't match the scriptPubKey in the prevout",
        psbt:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU210gwRQIhAPYQOLMI3B2oZaNIUnRvAVdyk0IIxtJEVDk82ZvfIhd3AiAFbmdaZ1ptCgK4WxTl4pB02KJam1dgvqKBb2YZEKAG6gEBAwQBAAAAAQRHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4iBgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfxDZDGpPAAAAgAAAAIAAAACAIgYC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtcQ2QxqTwAAAIAAAACAAQAAgAABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohyICAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zRzBEAiBl9FulmYtZon/+GnvtAWrx8fkNVLOqj3RQql9WolEDvQIgf3JHA60e25ZoCyhLVtT/y4j3+3Weq74IqjDym4UTg9IBAQMEAQAAAAEEIgAgjCNTFzdDtZXftKB7crqOQuN5fadOh/59nXSX47ICiQABBUdSIQMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3CECOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnNSriIGAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zENkMak8AAACAAAAAgAMAAIAiBgMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3BDZDGpPAAAAgAAAAIACAACAACICA6mkw39ZltOqJdusa1cK8GUDlEkpQkYLNUdT7Z7spYdxENkMak8AAACAAAAAgAQAAIAAIgICf2OZdX0u/1WhNq0CxoSxg4tlVuXxtrNCgqlLa1AFEJYQ2QxqTwAAAIAAAACABQAAgAA=',
        inputToCheck: 1,
      },
      {
        description:
          'witnessScript with witness UTXO does not match the redeemScript',
        errorMessage:
          "Witness script for input #1 doesn't match the scriptPubKey in the prevout",
        psbt:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU210gwRQIhAPYQOLMI3B2oZaNIUnRvAVdyk0IIxtJEVDk82ZvfIhd3AiAFbmdaZ1ptCgK4WxTl4pB02KJam1dgvqKBb2YZEKAG6gEBAwQBAAAAAQRHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4iBgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfxDZDGpPAAAAgAAAAIAAAACAIgYC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtcQ2QxqTwAAAIAAAACAAQAAgAABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohyICAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zRzBEAiBl9FulmYtZon/+GnvtAWrx8fkNVLOqj3RQql9WolEDvQIgf3JHA60e25ZoCyhLVtT/y4j3+3Weq74IqjDym4UTg9IBAQMEAQAAAAEEIgAgjCNTFzdDtZXftKB7crqOQuN5fadOh/59nXSX47ICiQMBBUdSIQMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3CECOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnNSrSIGAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zENkMak8AAACAAAAAgAMAAIAiBgMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3BDZDGpPAAAAgAAAAIACAACAACICA6mkw39ZltOqJdusa1cK8GUDlEkpQkYLNUdT7Z7spYdxENkMak8AAACAAAAAgAQAAIAAIgICf2OZdX0u/1WhNq0CxoSxg4tlVuXxtrNCgqlLa1AFEJYQ2QxqTwAAAIAAAACABQAAgAA=',
        inputToCheck: 1,
      },
    ],
    creator: [
      {
        inputs: [
          {
            hash:
              '75ddabb27b8845f5247975c8a5ba7c6f336c4570708ebe230caf6db5217ae858',
            index: 0,
          },
          {
            hash:
              '1dea7cd05979072a3578cab271c02244ea8a090bbb46aa680a65ecd027048d83',
            index: 1,
          },
        ],
        outputs: [
          {
            script: '0014d85c2b71d0060b09c9886aeb815e50991dda124d',
            value: BigInt(149990000),
          },
          {
            script: '001400aea9a2e5f0f876a588df5546e8742d1d87008f',
            value: BigInt(100000000),
          },
        ],
        result:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAAAAAA=',
      },
    ],
    updater: [
      {
        psbt:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAAAAAA=',
        inputData: [
          {
            nonWitnessUtxo: Buffer.from(
              '0200000001aad73931018bd25f84ae400b68848be09db706eac2ac18298babee71ab656f8b0000000048473044022058f6fc7c6a33e1b31548d481c826c015bd30135aad42cd67790dab66d2ad243b02204a1ced2604c6735b6393e5b41691dd78b00f0c5942fb9f751856faa938157dba01feffffff0280f0fa020000000017a9140fb9463421696b82c833af241c78c17ddbde493487d0f20a270100000017a91429ca74f8a08f81999428185c97b5d852e4063f618765000000',
              'hex',
            ),
            redeemScript: Buffer.from(
              '5221029583bf39ae0a609747ad199addd634fa6108559d6c5cd39b4c2183f1ab96e07f2102dab61ff49a14db6a7d02b0cd1fbb78fc4b18312b5b4e54dae4dba2fbfef536d752ae',
              'hex',
            ),
            bip32Derivation: [
              {
                masterFingerprint: Buffer.from('d90c6a4f', 'hex'),
                pubkey: Buffer.from(
                  '029583bf39ae0a609747ad199addd634fa6108559d6c5cd39b4c2183f1ab96e07f',
                  'hex',
                ),
                path: "m/0'/0'/0'",
              },
              {
                masterFingerprint: Buffer.from('d90c6a4f', 'hex'),
                pubkey: Buffer.from(
                  '02dab61ff49a14db6a7d02b0cd1fbb78fc4b18312b5b4e54dae4dba2fbfef536d7',
                  'hex',
                ),
                path: "m/0'/0'/1'",
              },
            ],
          },
          {
            witnessUtxo: {
              script: Buffer.from(
                'a914b7f5faf40e3d40a5a459b1db3535f2b72fa921e887',
                'hex',
              ),
              value: BigInt(200000000),
            },
            redeemScript: Buffer.from(
              '00208c2353173743b595dfb4a07b72ba8e42e3797da74e87fe7d9d7497e3b2028903',
              'hex',
            ),
            witnessScript: Buffer.from(
              '522103089dc10c7ac6db54f91329af617333db388cead0c231f723379d1b99030b02dc21023add904f3d6dcf59ddb906b0dee23529b7ffb9ed50e5e86151926860221f0e7352ae',
              'hex',
            ),
            bip32Derivation: [
              {
                masterFingerprint: Buffer.from('d90c6a4f', 'hex'),
                pubkey: Buffer.from(
                  '023add904f3d6dcf59ddb906b0dee23529b7ffb9ed50e5e86151926860221f0e73',
                  'hex',
                ),
                path: "m/0'/0'/3'",
              },
              {
                masterFingerprint: Buffer.from('d90c6a4f', 'hex'),
                pubkey: Buffer.from(
                  '03089dc10c7ac6db54f91329af617333db388cead0c231f723379d1b99030b02dc',
                  'hex',
                ),
                path: "m/0'/0'/2'",
              },
            ],
          },
        ],
        outputData: [
          {
            bip32Derivation: [
              {
                masterFingerprint: Buffer.from('d90c6a4f', 'hex'),
                pubkey: Buffer.from(
                  '03a9a4c37f5996d3aa25dbac6b570af0650394492942460b354753ed9eeca58771',
                  'hex',
                ),
                path: "m/0'/0'/4'",
              },
            ],
          },
          {
            bip32Derivation: [
              {
                masterFingerprint: Buffer.from('d90c6a4f', 'hex'),
                pubkey: Buffer.from(
                  '027f6399757d2eff55a136ad02c684b1838b6556e5f1b6b34282a94b6b50051096',
                  'hex',
                ),
                path: "m/0'/0'/5'",
              },
            ],
          },
        ],
        result:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABBEdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSriIGApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/ENkMak8AAACAAAAAgAAAAIAiBgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU21xDZDGpPAAAAgAAAAIABAACAAAEBIADC6wsAAAAAF6kUt/X69A49QKWkWbHbNTXyty+pIeiHAQQiACCMI1MXN0O1ld+0oHtyuo5C43l9p06H/n2ddJfjsgKJAwEFR1IhAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcIQI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc1KuIgYCOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnMQ2QxqTwAAAIAAAACAAwAAgCIGAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcENkMak8AAACAAAAAgAIAAIAAIgIDqaTDf1mW06ol26xrVwrwZQOUSSlCRgs1R1Ptnuylh3EQ2QxqTwAAAIAAAACABAAAgAAiAgJ/Y5l1fS7/VaE2rQLGhLGDi2VW5fG2s0KCqUtrUAUQlhDZDGpPAAAAgAAAAIAFAACAAA==',
      },
      {
        psbt:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABBEdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSriIGApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/ENkMak8AAACAAAAAgAAAAIAiBgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU21xDZDGpPAAAAgAAAAIABAACAAAEBIADC6wsAAAAAF6kUt/X69A49QKWkWbHbNTXyty+pIeiHAQQiACCMI1MXN0O1ld+0oHtyuo5C43l9p06H/n2ddJfjsgKJAwEFR1IhAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcIQI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc1KuIgYCOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnMQ2QxqTwAAAIAAAACAAwAAgCIGAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcENkMak8AAACAAAAAgAIAAIAAIgIDqaTDf1mW06ol26xrVwrwZQOUSSlCRgs1R1Ptnuylh3EQ2QxqTwAAAIAAAACABAAAgAAiAgJ/Y5l1fS7/VaE2rQLGhLGDi2VW5fG2s0KCqUtrUAUQlhDZDGpPAAAAgAAAAIAFAACAAA==',
        inputData: [
          {
            sighashType: 1,
          },
          {
            sighashType: 1,
          },
        ],
        result:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABAwQBAAAAAQRHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4iBgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfxDZDGpPAAAAgAAAAIAAAACAIgYC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtcQ2QxqTwAAAIAAAACAAQAAgAABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohwEDBAEAAAABBCIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQVHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4iBgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8OcxDZDGpPAAAAgAAAAIADAACAIgYDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwQ2QxqTwAAAIAAAACAAgAAgAAiAgOppMN/WZbTqiXbrGtXCvBlA5RJKUJGCzVHU+2e7KWHcRDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
      },
    ],
    signer: [
      {
        psbt:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABAwQBAAAAAQRHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4iBgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfxDZDGpPAAAAgAAAAIAAAACAIgYC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtcQ2QxqTwAAAIAAAACAAQAAgAABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohwEDBAEAAAABBCIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQVHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4iBgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8OcxDZDGpPAAAAgAAAAIADAACAIgYDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwQ2QxqTwAAAIAAAACAAgAAgAAiAgOppMN/WZbTqiXbrGtXCvBlA5RJKUJGCzVHU+2e7KWHcRDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
        keys: [
          {
            inputToSign: 0,
            WIF: 'cP53pDbR5WtAD8dYAW9hhTjuvvTVaEiQBdrz9XPrgLBeRFiyCbQr',
          },
          {
            inputToSign: 1,
            WIF: 'cR6SXDoyfQrcp4piaiHE97Rsgta9mNhGTen9XeonVgwsh4iSgw6d',
          },
        ],
        result:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgf0cwRAIgdAGK1BgAl7hzMjwAFXILNoTMgSOJEEjn282bVa1nnJkCIHPTabdA4+tT3O+jOCPIBwUUylWn3ZVE8VfBZ5EyYRGMAQEDBAEAAAABBEdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSriIGApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/ENkMak8AAACAAAAAgAAAAIAiBgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU21xDZDGpPAAAAgAAAAIABAACAAAEBIADC6wsAAAAAF6kUt/X69A49QKWkWbHbNTXyty+pIeiHIgIDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtxHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwEBAwQBAAAAAQQiACCMI1MXN0O1ld+0oHtyuo5C43l9p06H/n2ddJfjsgKJAwEFR1IhAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcIQI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc1KuIgYCOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnMQ2QxqTwAAAIAAAACAAwAAgCIGAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcENkMak8AAACAAAAAgAIAAIAAIgIDqaTDf1mW06ol26xrVwrwZQOUSSlCRgs1R1Ptnuylh3EQ2QxqTwAAAIAAAACABAAAgAAiAgJ/Y5l1fS7/VaE2rQLGhLGDi2VW5fG2s0KCqUtrUAUQlhDZDGpPAAAAgAAAAIAFAACAAA==',
      },
      {
        psbt:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABAwQBAAAAAQRHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4iBgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfxDZDGpPAAAAgAAAAIAAAACAIgYC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtcQ2QxqTwAAAIAAAACAAQAAgAABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohwEDBAEAAAABBCIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQVHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4iBgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8OcxDZDGpPAAAAgAAAAIADAACAIgYDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwQ2QxqTwAAAIAAAACAAgAAgAAiAgOppMN/WZbTqiXbrGtXCvBlA5RJKUJGCzVHU+2e7KWHcRDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
        keys: [
          {
            inputToSign: 0,
            WIF: 'cT7J9YpCwY3AVRFSjN6ukeEeWY6mhpbJPxRaDaP5QTdygQRxP9Au',
          },
          {
            inputToSign: 1,
            WIF: 'cNBc3SWUip9PPm1GjRoLEJT6T41iNzCYtD7qro84FMnM5zEqeJsE',
          },
        ],
        result:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU210gwRQIhAPYQOLMI3B2oZaNIUnRvAVdyk0IIxtJEVDk82ZvfIhd3AiAFbmdaZ1ptCgK4WxTl4pB02KJam1dgvqKBb2YZEKAG6gEBAwQBAAAAAQRHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4iBgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfxDZDGpPAAAAgAAAAIAAAACAIgYC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtcQ2QxqTwAAAIAAAACAAQAAgAABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohyICAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zRzBEAiBl9FulmYtZon/+GnvtAWrx8fkNVLOqj3RQql9WolEDvQIgf3JHA60e25ZoCyhLVtT/y4j3+3Weq74IqjDym4UTg9IBAQMEAQAAAAEEIgAgjCNTFzdDtZXftKB7crqOQuN5fadOh/59nXSX47ICiQMBBUdSIQMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3CECOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnNSriIGAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zENkMak8AAACAAAAAgAMAAIAiBgMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3BDZDGpPAAAAgAAAAIACAACAACICA6mkw39ZltOqJdusa1cK8GUDlEkpQkYLNUdT7Z7spYdxENkMak8AAACAAAAAgAQAAIAAIgICf2OZdX0u/1WhNq0CxoSxg4tlVuXxtrNCgqlLa1AFEJYQ2QxqTwAAAIAAAACABQAAgAA=',
      },
    ],
    combiner: [
      {
        psbts: [
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgf0cwRAIgdAGK1BgAl7hzMjwAFXILNoTMgSOJEEjn282bVa1nnJkCIHPTabdA4+tT3O+jOCPIBwUUylWn3ZVE8VfBZ5EyYRGMAQEDBAEAAAABBEdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSriIGApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/ENkMak8AAACAAAAAgAAAAIAiBgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU21xDZDGpPAAAAgAAAAIABAACAAAEBIADC6wsAAAAAF6kUt/X69A49QKWkWbHbNTXyty+pIeiHIgIDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtxHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwEBAwQBAAAAAQQiACCMI1MXN0O1ld+0oHtyuo5C43l9p06H/n2ddJfjsgKJAwEFR1IhAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcIQI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc1KuIgYCOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnMQ2QxqTwAAAIAAAACAAwAAgCIGAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcENkMak8AAACAAAAAgAIAAIAAIgIDqaTDf1mW06ol26xrVwrwZQOUSSlCRgs1R1Ptnuylh3EQ2QxqTwAAAIAAAACABAAAgAAiAgJ/Y5l1fS7/VaE2rQLGhLGDi2VW5fG2s0KCqUtrUAUQlhDZDGpPAAAAgAAAAIAFAACAAA==',
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU210gwRQIhAPYQOLMI3B2oZaNIUnRvAVdyk0IIxtJEVDk82ZvfIhd3AiAFbmdaZ1ptCgK4WxTl4pB02KJam1dgvqKBb2YZEKAG6gEBAwQBAAAAAQRHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4iBgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfxDZDGpPAAAAgAAAAIAAAACAIgYC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtcQ2QxqTwAAAIAAAACAAQAAgAABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohyICAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zRzBEAiBl9FulmYtZon/+GnvtAWrx8fkNVLOqj3RQql9WolEDvQIgf3JHA60e25ZoCyhLVtT/y4j3+3Weq74IqjDym4UTg9IBAQMEAQAAAAEEIgAgjCNTFzdDtZXftKB7crqOQuN5fadOh/59nXSX47ICiQMBBUdSIQMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3CECOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnNSriIGAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zENkMak8AAACAAAAAgAMAAIAiBgMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3BDZDGpPAAAAgAAAAIACAACAACICA6mkw39ZltOqJdusa1cK8GUDlEkpQkYLNUdT7Z7spYdxENkMak8AAACAAAAAgAQAAIAAIgICf2OZdX0u/1WhNq0CxoSxg4tlVuXxtrNCgqlLa1AFEJYQ2QxqTwAAAIAAAACABQAAgAA=',
        ],
        result:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgf0cwRAIgdAGK1BgAl7hzMjwAFXILNoTMgSOJEEjn282bVa1nnJkCIHPTabdA4+tT3O+jOCPIBwUUylWn3ZVE8VfBZ5EyYRGMASICAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXSDBFAiEA9hA4swjcHahlo0hSdG8BV3KTQgjG0kRUOTzZm98iF3cCIAVuZ1pnWm0KArhbFOXikHTYolqbV2C+ooFvZhkQoAbqAQEDBAEAAAABBEdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSriIGApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/ENkMak8AAACAAAAAgAAAAIAiBgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU21xDZDGpPAAAAgAAAAIABAACAAAEBIADC6wsAAAAAF6kUt/X69A49QKWkWbHbNTXyty+pIeiHIgIDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtxHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwEiAgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc0cwRAIgZfRbpZmLWaJ//hp77QFq8fH5DVSzqo90UKpfVqJRA70CIH9yRwOtHtuWaAsoS1bU/8uI9/t1nqu+CKow8puFE4PSAQEDBAEAAAABBCIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQVHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4iBgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8OcxDZDGpPAAAAgAAAAIADAACAIgYDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwQ2QxqTwAAAIAAAACAAgAAgAAiAgOppMN/WZbTqiXbrGtXCvBlA5RJKUJGCzVHU+2e7KWHcRDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
      },
      {
        psbts: [
          'cHNidP8BAD8CAAAAAf//////////////////////////////////////////AAAAAAD/////AQAAAAAAAAAAA2oBAAAAAAAKDwECAwQFBgcICQ8BAgMEBQYHCAkKCwwNDg8ACg8BAgMEBQYHCAkPAQIDBAUGBwgJCgsMDQ4PAAoPAQIDBAUGBwgJDwECAwQFBgcICQoLDA0ODwA=',
          'cHNidP8BAD8CAAAAAf//////////////////////////////////////////AAAAAAD/////AQAAAAAAAAAAA2oBAAAAAAAKDwECAwQFBgcIEA8BAgMEBQYHCAkKCwwNDg8ACg8BAgMEBQYHCBAPAQIDBAUGBwgJCgsMDQ4PAAoPAQIDBAUGBwgQDwECAwQFBgcICQoLDA0ODwA=',
        ],
        result:
          'cHNidP8BAD8CAAAAAf//////////////////////////////////////////AAAAAAD/////AQAAAAAAAAAAA2oBAAAAAAAKDwECAwQFBgcICQ8BAgMEBQYHCAkKCwwNDg8KDwECAwQFBgcIEA8BAgMEBQYHCAkKCwwNDg8ACg8BAgMEBQYHCAkPAQIDBAUGBwgJCgsMDQ4PCg8BAgMEBQYHCBAPAQIDBAUGBwgJCgsMDQ4PAAoPAQIDBAUGBwgJDwECAwQFBgcICQoLDA0ODwoPAQIDBAUGBwgQDwECAwQFBgcICQoLDA0ODwA=',
      },
    ],
    finalizer: [
      {
        psbt:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgf0cwRAIgdAGK1BgAl7hzMjwAFXILNoTMgSOJEEjn282bVa1nnJkCIHPTabdA4+tT3O+jOCPIBwUUylWn3ZVE8VfBZ5EyYRGMASICAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXSDBFAiEA9hA4swjcHahlo0hSdG8BV3KTQgjG0kRUOTzZm98iF3cCIAVuZ1pnWm0KArhbFOXikHTYolqbV2C+ooFvZhkQoAbqAQEDBAEAAAABBEdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSriIGApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/ENkMak8AAACAAAAAgAAAAIAiBgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU21xDZDGpPAAAAgAAAAIABAACAAAEBIADC6wsAAAAAF6kUt/X69A49QKWkWbHbNTXyty+pIeiHIgIDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtxHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwEiAgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc0cwRAIgZfRbpZmLWaJ//hp77QFq8fH5DVSzqo90UKpfVqJRA70CIH9yRwOtHtuWaAsoS1bU/8uI9/t1nqu+CKow8puFE4PSAQEDBAEAAAABBCIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQVHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4iBgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8OcxDZDGpPAAAAgAAAAIADAACAIgYDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwQ2QxqTwAAAIAAAACAAgAAgAAiAgOppMN/WZbTqiXbrGtXCvBlA5RJKUJGCzVHU+2e7KWHcRDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
        result:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABB9oARzBEAiB0AYrUGACXuHMyPAAVcgs2hMyBI4kQSOfbzZtVrWecmQIgc9Npt0Dj61Pc76M4I8gHBRTKVafdlUTxV8FnkTJhEYwBSDBFAiEA9hA4swjcHahlo0hSdG8BV3KTQgjG0kRUOTzZm98iF3cCIAVuZ1pnWm0KArhbFOXikHTYolqbV2C+ooFvZhkQoAbqAUdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSrgABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohwEHIyIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQjaBABHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwFHMEQCIGX0W6WZi1mif/4ae+0BavHx+Q1Us6qPdFCqX1aiUQO9AiB/ckcDrR7blmgLKEtW1P/LiPf7dZ6rvgiqMPKbhROD0gFHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4AIgIDqaTDf1mW06ol26xrVwrwZQOUSSlCRgs1R1Ptnuylh3EQ2QxqTwAAAIAAAACABAAAgAAiAgJ/Y5l1fS7/VaE2rQLGhLGDi2VW5fG2s0KCqUtrUAUQlhDZDGpPAAAAgAAAAIAFAACAAA==',
      },
    ],
    extractor: [
      {
        psbt:
          'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABB9oARzBEAiB0AYrUGACXuHMyPAAVcgs2hMyBI4kQSOfbzZtVrWecmQIgc9Npt0Dj61Pc76M4I8gHBRTKVafdlUTxV8FnkTJhEYwBSDBFAiEA9hA4swjcHahlo0hSdG8BV3KTQgjG0kRUOTzZm98iF3cCIAVuZ1pnWm0KArhbFOXikHTYolqbV2C+ooFvZhkQoAbqAUdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSrgABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohwEHIyIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQjaBABHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwFHMEQCIGX0W6WZi1mif/4ae+0BavHx+Q1Us6qPdFCqX1aiUQO9AiB/ckcDrR7blmgLKEtW1P/LiPf7dZ6rvgiqMPKbhROD0gFHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4AIgIDqaTDf1mW06ol26xrVwrwZQOUSSlCRgs1R1Ptnuylh3EQ2QxqTwAAAIAAAACABAAAgAAiAgJ/Y5l1fS7/VaE2rQLGhLGDi2VW5fG2s0KCqUtrUAUQlhDZDGpPAAAAgAAAAIAFAACAAA==',
        transaction:
          '0200000000010258e87a21b56daf0c23be8e7070456c336f7cbaa5c8757924f545887bb2abdd7500000000da00473044022074018ad4180097b873323c0015720b3684cc8123891048e7dbcd9b55ad679c99022073d369b740e3eb53dcefa33823c8070514ca55a7dd9544f157c167913261118c01483045022100f61038b308dc1da865a34852746f015772934208c6d24454393cd99bdf2217770220056e675a675a6d0a02b85b14e5e29074d8a25a9b5760bea2816f661910a006ea01475221029583bf39ae0a609747ad199addd634fa6108559d6c5cd39b4c2183f1ab96e07f2102dab61ff49a14db6a7d02b0cd1fbb78fc4b18312b5b4e54dae4dba2fbfef536d752aeffffffff838d0427d0ec650a68aa46bb0b098aea4422c071b2ca78352a077959d07cea1d01000000232200208c2353173743b595dfb4a07b72ba8e42e3797da74e87fe7d9d7497e3b2028903ffffffff0270aaf00800000000160014d85c2b71d0060b09c9886aeb815e50991dda124d00e1f5050000000016001400aea9a2e5f0f876a588df5546e8742d1d87008f000400473044022062eb7a556107a7c73f45ac4ab5a1dddf6f7075fb1275969a7f383efff784bcb202200c05dbb7470dbf2f08557dd356c7325c1ed30913e996cd3840945db12228da5f01473044022065f45ba5998b59a27ffe1a7bed016af1f1f90d54b3aa8f7450aa5f56a25103bd02207f724703ad1edb96680b284b56d4ffcb88f7fb759eabbe08aa30f29b851383d20147522103089dc10c7ac6db54f91329af617333db388cead0c231f723379d1b99030b02dc21023add904f3d6dcf59ddb906b0dee23529b7ffb9ed50e5e86151926860221f0e7352ae00000000',
      },
    ],
  },
  addInput: {
    checks: [
      {
        description: 'checks for hash and index',
        inputData: {
          hash: 42,
        },
        exception:
          'Invalid arguments for Psbt\\.addInput\\. Requires single object with at least \\[hash\\] and \\[index\\]',
      },
      {
        description: 'checks for invalid p2wsh witnessScript',
        inputData: {
          hash: Buffer.from(
            '000102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f',
            'hex',
          ),
          index: 0,
          witnessScript: Buffer.from(
            '0014000102030405060708090a0b0c0d0e0f00010203',
            'hex',
          ),
        },
        exception: 'P2WPKH or P2SH can not be contained within P2WSH',
      },
      {
        description: 'checks for invalid p2wsh witnessScript',
        inputData: {
          hash: Buffer.from(
            '000102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f',
            'hex',
          ),
          index: 0,
          witnessScript: Buffer.from(
            'a914000102030405060708090a0b0c0d0e0f0001020387',
            'hex',
          ),
        },
        exception: 'P2WPKH or P2SH can not be contained within P2WSH',
      },
      {
        description: 'should be equal',
        inputData: {
          hash: Buffer.from(
            '000102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f',
            'hex',
          ),
          index: 2,
        },
        equals:
          'cHNidP8BADMCAAAAAQABAgMEBQYHCAkKCwwNDg8AAQIDBAUGBwgJCgsMDQ4PAgAAAAD/////AAAAAAAAAAA=',
      },
    ],
  },
  addOutput: {
    checks: [
      {
        description: 'Checks value is number',
        outputData: {
          address: '1P2NFEBp32V2arRwZNww6tgXEV58FG94mr',
          value: 'xyz',
        },
        exception: 'Error adding output.',
      },
      {
        description: 'Adds output normally',
        outputData: {
          address: '1P2NFEBp32V2arRwZNww6tgXEV58FG94mr',
          value: BigInt(42),
        },
      },
    ],
  },
  signInput: {
    checks: [
      {
        description: 'checks the input exists',
        shouldSign: {
          psbt:
            'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFC8spHIOpiw9giaEPd5RGkMYvXRHiKwAAAAAAAA=',
          inputToCheck: 0,
          WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
        },
        shouldThrow: {
          errorMessage: 'No input #1',
          psbt:
            'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFC8spHIOpiw9giaEPd5RGkMYvXRHiKwAAAAAAAA=',
          inputToCheck: 1,
          WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
        },
      },
      {
        description: 'checks a UTXO value exists for the input',
        shouldSign: {
          psbt:
            'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFC8spHIOpiw9giaEPd5RGkMYvXRHiKwAAAAAAAA=',
          inputToCheck: 0,
          WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
        },
        shouldThrow: {
          errorMessage: 'Need a Utxo input item for signing',
          psbt:
            'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAAA=',
          inputToCheck: 0,
          WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
        },
      },
      {
        description: "checks privkey matches the input it's signing",
        shouldSign: {
          psbt:
            'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFC8spHIOpiw9giaEPd5RGkMYvXRHiKwAAAAAAAA=',
          inputToCheck: 0,
          WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
        },
        shouldThrow: {
          errorMessage:
            'Can not sign for this input with the key 02e717fee6be913148f9fd676c0876b7e4574118542c6758b4a9fb9f38f171842b',
          psbt:
            'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFC8spHIOpiw9giaEPd5RGkMYvXRHiKwAAAAAAAA=',
          inputToCheck: 0,
          WIF: 'Kz4mjzErKCH5eQ97RXNQd3Wv7WsLA83BjynfQk4N7BB8J5xuUjAv',
        },
      },
      {
        description:
          'checks non-witness UTXO matches the hash specified in the prevout',
        shouldSign: {
          psbt:
            'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFC8spHIOpiw9giaEPd5RGkMYvXRHiKwAAAAAAAA=',
          inputToCheck: 0,
          WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
        },
        shouldThrow: {
          errorMessage:
            "Non-witness UTXO hash for input #0 doesn't match the hash specified in the prevout",
          psbt:
            'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAQD4AQAAAAABAbD7u8z1SxTjfvhwmkQQvdbbWA+n3GKBBmGecSIAaM5jBQAAABcWABS0SqIhdn2LbW4TAJc3GVh7SnD/eP////8CNg8AAAAAAAAWABSmNm8WWVF+wq+QAeRo9d763jEXhRAnAAAAAAAAGXapFNpkc+03Pgj0bdgAP8p7py++nFVeiKwCRzBEAiB/u0BLwdeerqWf0JH33wwMv8Nn3sKblFvj+CntdC4B9gIgKVVHBH1c9ewnzkuyW6dnz1YARujBJnle1eBNSBAJD9IBIQOmYxHmd2Yz53FpC9+nv+pKdM+5OyEAW3BAN2cccQ0LkgAAAAAAAA==',
          inputToCheck: 0,
          WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
        },
      },
      {
        description:
          'checks redeem script matches the scriptPubKey in a non-witness prevout',
        shouldSign: {
          psbt:
            'cHNidP8BADMBAAAAAR2dq8JwBaxnbWHZGw0HdxuUGFcg6dvx3pgjWMm+Pzf2AAAAAAD/////AAAAAAAAAQC9AgAAAAH//////////////////////////////////////////wAAAABqRzBEAiAf7N+IK1uuxTxvEOoVGabNsiT7jMlfSDCd0VYxv+sQTQIgQVYM7ig9TIx1LzrX2RXgw2zW2fMKuRs/bT9eZx6jmYwBIQJpKKFOB6PrPJhRAtaQ+cHHryY5QYIi5dxZtkMwCtuFYf////8BAOH1BQAAAAAXqRRdh8wk5NRiF7VGQ4Zb4i8Vl1YFMocAAAAAAQRpUiECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWEhAgHGF3SgP82qhvqMptNluTLHhLtzDsmc0pNWEDETNj/rIQIFIl+T3Z90vBFGN8uYJHCrUO4DvrOGVWkVDsBeEzBUi1OuAAA=',
          inputToCheck: 0,
          WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
        },
        shouldThrow: {
          errorMessage:
            "Redeem script for input #0 doesn't match the scriptPubKey in the prevout",
          psbt:
            'cHNidP8BADMBAAAAAR2dq8JwBaxnbWHZGw0HdxuUGFcg6dvx3pgjWMm+Pzf2AAAAAAD/////AAAAAAAAAQC9AgAAAAH//////////////////////////////////////////wAAAABqRzBEAiAf7N+IK1uuxTxvEOoVGabNsiT7jMlfSDCd0VYxv+sQTQIgQVYM7ig9TIx1LzrX2RXgw2zW2fMKuRs/bT9eZx6jmYwBIQJpKKFOB6PrPJhRAtaQ+cHHryY5QYIi5dxZtkMwCtuFYf////8BAOH1BQAAAAAXqRRdh8wk5NRiF7VGQ4Zb4i8Vl1YFMocAAAAAAQRpUiEDGMZFrWWJBIIu33FdV9Q+Zit0fcoBOdgS7ooA2h2QlbAhAuAzQeDZh730hBbfTPzlaXJgCh2Jyui/ufS0k8wqJ55FIQKMg6lgEnyRnGIZ90eP4MmuRdT3EcO4+irJEm5yTCiko1OuAAA=',
          inputToCheck: 0,
          WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
        },
      },
      {
        description:
          'checks redeem script matches the scriptPubKey in a witness prevout',
        shouldSign: {
          psbt:
            'cHNidP8BADMBAAAAAYaq+PdOUY2PnV9kZKa82XlqrPByOqwH2TRg2+LQdqs2AAAAAAD/////AAAAAAAAAQEgAOH1BQAAAAAXqRSTNeWHqa9INvSnQ120SZeJc+6JSocBBBYAFC8spHIOpiw9giaEPd5RGkMYvXRHAAA=',
          inputToCheck: 0,
          WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
        },
        shouldThrow: {
          errorMessage:
            "Redeem script for input #0 doesn't match the scriptPubKey in the prevout",
          psbt:
            'cHNidP8BADMBAAAAAYaq+PdOUY2PnV9kZKa82XlqrPByOqwH2TRg2+LQdqs2AAAAAAD/////AAAAAAAAAQEgAOH1BQAAAAAXqRSTNeWHqa9INvSnQ120SZeJc+6JSocBBBYAFA3zpl6FMnlgCviVJgbcnBj01iLgAAA=',
          inputToCheck: 0,
          WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
        },
      },
      {
        description: 'checks the sighash type',
        shouldThrow: {
          errorMessage:
            'Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: SIGHASH_ANYONECANPAY | SIGHASH_ALL',
          psbt:
            'cHNidP8BADMBAAAAAYaq+PdOUY2PnV9kZKa82XlqrPByOqwH2TRg2+LQdqs2AAAAAAD/////AAAAAAAAAQEgAOH1BQAAAAAXqRSTNeWHqa9INvSnQ120SZeJc+6JSocBAwSBAAAAAQQWABQvLKRyDqYsPYImhD3eURpDGL10RwAA',
          inputToCheck: 0,
          WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
        },
      },
      {
        description:
          'allows signing non-whitelisted sighashtype when explicitly passed in',
        shouldSign: {
          psbt:
            'cHNidP8BADMBAAAAAYaq+PdOUY2PnV9kZKa82XlqrPByOqwH2TRg2+LQdqs2AAAAAAD/////AAAAAAAAAQEgAOH1BQAAAAAXqRSTNeWHqa9INvSnQ120SZeJc+6JSocBAwSBAAAAAQQWABQvLKRyDqYsPYImhD3eURpDGL10RwAA',
          sighashTypes: [129],
          inputToCheck: 0,
          WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
        },
      },
    ],
  },
  signInputHD: {
    checks: [
      {
        description: 'checks the bip32Derivation exists',
        shouldSign: {
          psbt:
            'cHNidP8BADMBAAAAARtEptsZNydT9Bh9A5ptwIZz87yH8NXwzr1bjJorAZEAAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFJWXNY2Vp7E5pNOey64rnhhgUlohiKwAAAAAIgYDn85vSg5rlR25fd4MOU2ANsFoO+q828zuOI/5b8tj89kYBCppsiwAAIAAAACAAAAAgAAAAAAAAAAAAAA=',
          inputToCheck: 0,
          xprv:
            'xprv9s21ZrQH143K2XNCa3o3tii6nbyJAET6GjTfzcF6roTjAMzLUBe8nt7QHNYqKah8JBv8V67MTWBCqPptRr6khjTSvCUVru78KHW13Viwnev',
        },
        shouldThrow: {
          errorMessage: 'Need bip32Derivation to sign with HD',
          psbt:
            'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFC8spHIOpiw9giaEPd5RGkMYvXRHiKwAAAAAAAA=',
          inputToCheck: 0,
          xprv:
            'xprv9s21ZrQH143K2XNCa3o3tii6nbyJAET6GjTfzcF6roTjAMzLUBe8nt7QHNYqKah8JBv8V67MTWBCqPptRr6khjTSvCUVru78KHW13Viwnev',
        },
      },
      {
        description: 'checks the bip32Derivation exists',
        shouldSign: {
          psbt:
            'cHNidP8BADMBAAAAARtEptsZNydT9Bh9A5ptwIZz87yH8NXwzr1bjJorAZEAAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFJWXNY2Vp7E5pNOey64rnhhgUlohiKwAAAAAIgYDn85vSg5rlR25fd4MOU2ANsFoO+q828zuOI/5b8tj89kYBCppsiwAAIAAAACAAAAAgAAAAAAAAAAAAAA=',
          inputToCheck: 0,
          xprv:
            'xprv9s21ZrQH143K2XNCa3o3tii6nbyJAET6GjTfzcF6roTjAMzLUBe8nt7QHNYqKah8JBv8V67MTWBCqPptRr6khjTSvCUVru78KHW13Viwnev',
        },
        shouldThrow: {
          errorMessage:
            'Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint',
          psbt:
            'cHNidP8BADMBAAAAARtEptsZNydT9Bh9A5ptwIZz87yH8NXwzr1bjJorAZEAAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFJWXNY2Vp7E5pNOey64rnhhgUlohiKwAAAAAIgYD/85vSg5rlR25fd4MOU2ANsFoO+q828zuOI/5b8tj89kY/////ywAAIAAAACAAAAAgAAAAAAAAAAAAAA=',
          inputToCheck: 0,
          xprv:
            'xprv9s21ZrQH143K2XNCa3o3tii6nbyJAET6GjTfzcF6roTjAMzLUBe8nt7QHNYqKah8JBv8V67MTWBCqPptRr6khjTSvCUVru78KHW13Viwnev',
        },
      },
      {
        description: 'checks the bip32Derivation exists',
        shouldSign: {
          psbt:
            'cHNidP8BADMBAAAAARtEptsZNydT9Bh9A5ptwIZz87yH8NXwzr1bjJorAZEAAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFJWXNY2Vp7E5pNOey64rnhhgUlohiKwAAAAAIgYDn85vSg5rlR25fd4MOU2ANsFoO+q828zuOI/5b8tj89kYBCppsiwAAIAAAACAAAAAgAAAAAAAAAAAAAA=',
          inputToCheck: 0,
          xprv:
            'xprv9s21ZrQH143K2XNCa3o3tii6nbyJAET6GjTfzcF6roTjAMzLUBe8nt7QHNYqKah8JBv8V67MTWBCqPptRr6khjTSvCUVru78KHW13Viwnev',
        },
        shouldThrow: {
          errorMessage: 'pubkey did not match bip32Derivation',
          psbt:
            'cHNidP8BADMBAAAAARtEptsZNydT9Bh9A5ptwIZz87yH8NXwzr1bjJorAZEAAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFJWXNY2Vp7E5pNOey64rnhhgUlohiKwAAAAAIgYD/85vSg5rlR25fd4MOU2ANsFoO+q828zuOI/5b8tj89kYBCppsiwAAIAAAACAAAAAgAAAAAAAAAAAAAA=',
          inputToCheck: 0,
          xprv:
            'xprv9s21ZrQH143K2XNCa3o3tii6nbyJAET6GjTfzcF6roTjAMzLUBe8nt7QHNYqKah8JBv8V67MTWBCqPptRr6khjTSvCUVru78KHW13Viwnev',
        },
      },
    ],
  },
  finalizeAllInputs: [
    {
      type: 'P2PK',
      psbt:
        'cHNidP8BAFUCAAAAAZfdvR7JvbVsuXunG1P19tTYi8Z0l6WHiz+0jpzTNTt+AAAAAAD/////AYA4AQAAAAAAGXapFMjtQ0xCK7OPd32ZJTY2UcdpFIaJiKwAAAAAAAEAygIAAAABb7TMmNs5UwEEpccLHlaaM0w3HEHhh85NjrUObLDMuZsBAAAAa0gwRQIhANWUevBBcqfRpH67rDuFqI+KHqxViKXxmSM+6/jE5ZHjAiBgO/vQg2EsYhaOD5lQbmZYaymRLukA6SCoXhkN21hiOwEhAoKzWGkj1LJ2iOt5wj6jMOtAMGJH50ZjAYZU81uUu6y+/////wGQXwEAAAAAACMhAzpK4NeYX+xyBOKynjD3BEPDq7EN8brZXje488gxshXwrAAAAAAiAgM6SuDXmF/scgTisp4w9wRDw6uxDfG62V43uPPIMbIV8EgwRQIhAL3H/XEPRAZEbpjBwkuLqUKBSu1Inpb2rganXNFcY2JsAiASrXTM2xODEKp7m7RTzYqBchqlvbl88zO/CGW9SePj2gEAAA==',
      result:
        'cHNidP8BAFUCAAAAAZfdvR7JvbVsuXunG1P19tTYi8Z0l6WHiz+0jpzTNTt+AAAAAAD/////AYA4AQAAAAAAGXapFMjtQ0xCK7OPd32ZJTY2UcdpFIaJiKwAAAAAAAEAygIAAAABb7TMmNs5UwEEpccLHlaaM0w3HEHhh85NjrUObLDMuZsBAAAAa0gwRQIhANWUevBBcqfRpH67rDuFqI+KHqxViKXxmSM+6/jE5ZHjAiBgO/vQg2EsYhaOD5lQbmZYaymRLukA6SCoXhkN21hiOwEhAoKzWGkj1LJ2iOt5wj6jMOtAMGJH50ZjAYZU81uUu6y+/////wGQXwEAAAAAACMhAzpK4NeYX+xyBOKynjD3BEPDq7EN8brZXje488gxshXwrAAAAAABB0lIMEUCIQC9x/1xD0QGRG6YwcJLi6lCgUrtSJ6W9q4Gp1zRXGNibAIgEq10zNsTgxCqe5u0U82KgXIapb25fPMzvwhlvUnj49oBAAA=',
    },
    {
      type: 'P2PKH',
      psbt:
        'cHNidP8BAFUCAAAAAaTbj9mE+B5Z8PLsuGUNGOzDqrtwdB08vvSccSCrezh+AAAAAAD/////AYA4AQAAAAAAGXapFDuK+0mR+qtL9tyadI72bKMwH+vuiKwAAAAAAAEAwAIAAAABks7XL87tkSusFA3L2u2CdJeNkqTMobehPNm/wkGQUzoBAAAAa0gwRQIhAMtzqC7axSA7/7nbio9NKQZz2ePuKeaF5T4c8JSXWEdgAiAID39I05hbJMNGSomrF7XVWEsEEHHzX/lkL3vnOOu4cAEhAvu+bfurbDCzxfOLxEhvz9ZyxPLdI1h9wMT8gl2nyLYV/////wGQXwEAAAAAABl2qRTH5239BfS9zrbwUtvpATwjua4LGYisAAAAACICA1oNX0U/6GwAuVI7JHhneD94sm/o+YrfTnRAhdRUMjoISDBFAiEAhk+HbvY6YShBCUmBVCk42sFWH9LTwUv2wbRC/tIuEAwCIED/UkklY3fpdDBN7qSBHFDyEOeHMUzXD0bvtFTAiKP7AQAA',
      result:
        'cHNidP8BAFUCAAAAAaTbj9mE+B5Z8PLsuGUNGOzDqrtwdB08vvSccSCrezh+AAAAAAD/////AYA4AQAAAAAAGXapFDuK+0mR+qtL9tyadI72bKMwH+vuiKwAAAAAAAEAwAIAAAABks7XL87tkSusFA3L2u2CdJeNkqTMobehPNm/wkGQUzoBAAAAa0gwRQIhAMtzqC7axSA7/7nbio9NKQZz2ePuKeaF5T4c8JSXWEdgAiAID39I05hbJMNGSomrF7XVWEsEEHHzX/lkL3vnOOu4cAEhAvu+bfurbDCzxfOLxEhvz9ZyxPLdI1h9wMT8gl2nyLYV/////wGQXwEAAAAAABl2qRTH5239BfS9zrbwUtvpATwjua4LGYisAAAAAAEHa0gwRQIhAIZPh272OmEoQQlJgVQpONrBVh/S08FL9sG0Qv7SLhAMAiBA/1JJJWN36XQwTe6kgRxQ8hDnhzFM1w9G77RUwIij+wEhA1oNX0U/6GwAuVI7JHhneD94sm/o+YrfTnRAhdRUMjoIAAA=',
    },
    {
      type: 'P2MS',
      psbt:
        'cHNidP8BAFUCAAAAAbmLTo7GeyF7IT5PJznDiTVjhv5pQKcKe8Qa+8rqUpXuAAAAAAD/////AYA4AQAAAAAAGXapFF2G82oAzUpx/kcDUPy58goX16gkiKwAAAAAAAEAvgIAAAABMBwIKVKOFbas6tBD24LPchtrweE2jiXkPgSHdJndEfoAAAAAa0gwRQIhAJNchwx4je/ZqtZXSCD6BKJBQkpkTBGGdLoFZTcPKlDtAiAZefY/giaVw5rcEoJk4TRnFCyMG0dYLV5IVnFWkR38fQEhAi5yX8RMW6plVrMY26hithJ6j1w2mgqh/bOCAEVnbn/Z/////wGQXwEAAAAAABepFIoQ3seh+nGYzkI7MDw5zuSCIxEyhwAAAAAiAgLFmuo7gG8OjgmaO5AHuC/1OvDarQt16R7VEKU8dkRRCEgwRQIhAOqqlnUwmc+PqKZVwAAMLPNCKskHhVgk1pXR9d7nmB6SAiA0C24idVdtgl9+sIBR8A3Za5WcswNJ3i8PWTMWR10C4QEiAgPnartRgvSQnSJ2ydRuwSPXDdU3P1YQwhYsK7XzfGuUREgwRQIhANnDBUQWjS8hDTPidRZ95rGZK3LWCLIZB1NYx9++eBT8AiASupLR+KNa1Se7eoBkWQcDny+BaBfMQ+p1RTCAXd7/GAEBBItSIQLFmuo7gG8OjgmaO5AHuC/1OvDarQt16R7VEKU8dkRRCCEC4X74b+vRF3XLgyXyGejmE5VB1f3RY/IReUggyNHgdLYhA+dqu1GC9JCdInbJ1G7BI9cN1Tc/VhDCFiwrtfN8a5REIQO94OZv6yPD4kEZSZBquYA7FPsABZZ6UAteVuEw7fVxzlSuAAA=',
      result:
        'cHNidP8BAFUCAAAAAbmLTo7GeyF7IT5PJznDiTVjhv5pQKcKe8Qa+8rqUpXuAAAAAAD/////AYA4AQAAAAAAGXapFF2G82oAzUpx/kcDUPy58goX16gkiKwAAAAAAAEAvgIAAAABMBwIKVKOFbas6tBD24LPchtrweE2jiXkPgSHdJndEfoAAAAAa0gwRQIhAJNchwx4je/ZqtZXSCD6BKJBQkpkTBGGdLoFZTcPKlDtAiAZefY/giaVw5rcEoJk4TRnFCyMG0dYLV5IVnFWkR38fQEhAi5yX8RMW6plVrMY26hithJ6j1w2mgqh/bOCAEVnbn/Z/////wGQXwEAAAAAABepFIoQ3seh+nGYzkI7MDw5zuSCIxEyhwAAAAABB/0gAQBIMEUCIQDqqpZ1MJnPj6imVcAADCzzQirJB4VYJNaV0fXe55gekgIgNAtuInVXbYJffrCAUfAN2WuVnLMDSd4vD1kzFkddAuEBSDBFAiEA2cMFRBaNLyENM+J1Fn3msZkrctYIshkHU1jH3754FPwCIBK6ktH4o1rVJ7t6gGRZBwOfL4FoF8xD6nVFMIBd3v8YAUyLUiECxZrqO4BvDo4JmjuQB7gv9Trw2q0Ldeke1RClPHZEUQghAuF++G/r0Rd1y4Ml8hno5hOVQdX90WPyEXlIIMjR4HS2IQPnartRgvSQnSJ2ydRuwSPXDdU3P1YQwhYsK7XzfGuURCEDveDmb+sjw+JBGUmQarmAOxT7AAWWelALXlbhMO31cc5UrgAA',
    },
    {
      type: 'P2SH-P2WPKH',
      psbt:
        'cHNidP8BAFUCAAAAATIK6DMTn8bbrG7ZdiiVU3/YAgzyk3dwa56En58YfXbDAAAAAAD/////AYA4AQAAAAAAGXapFNU4SHWUW9ZNz+BcxCiuU/7UtJoMiKwAAAAAAAEAvgIAAAABly2BCiYZ3slqurlLwE7b8UXINYKfrJ9sQlBovzBAwFsBAAAAa0gwRQIhAJJ+Hyniw+KneWomeQYrP1duH7cfQ3j8GN6/RshZCfuvAiBux7Uu/5QqmSmL+LjoWZY2b9TWdluY6zLTkQWIornmYwEhAvUo9Sy7Pu44z84ZZPrQMQxBPpDJyy9WlLQMGdGIuUy7/////wGQXwEAAAAAABepFPwojcWCH2oE9dUjMmLC3bdK/xeWhwAAAAAiAgKj88rhJwk3Zxm0p0Rp+xC/6cxmj+I741DHPWPWN7iA+0cwRAIgTRhd9WUpoHYl9tUVmoJ336fJAJInIjdYsoatvRiW8hgCIGOYMlpKRHiHA428Sfa2CdAIIGGQCGhuIgIzj2FN6USnAQEEFgAU4sZupXPxqhcsOB1ghJxBvH4XcesAAA==',
      result:
        'cHNidP8BAFUCAAAAATIK6DMTn8bbrG7ZdiiVU3/YAgzyk3dwa56En58YfXbDAAAAAAD/////AYA4AQAAAAAAGXapFNU4SHWUW9ZNz+BcxCiuU/7UtJoMiKwAAAAAAAEAvgIAAAABly2BCiYZ3slqurlLwE7b8UXINYKfrJ9sQlBovzBAwFsBAAAAa0gwRQIhAJJ+Hyniw+KneWomeQYrP1duH7cfQ3j8GN6/RshZCfuvAiBux7Uu/5QqmSmL+LjoWZY2b9TWdluY6zLTkQWIornmYwEhAvUo9Sy7Pu44z84ZZPrQMQxBPpDJyy9WlLQMGdGIuUy7/////wGQXwEAAAAAABepFPwojcWCH2oE9dUjMmLC3bdK/xeWhwAAAAABBxcWABTixm6lc/GqFyw4HWCEnEG8fhdx6wEIawJHMEQCIE0YXfVlKaB2JfbVFZqCd9+nyQCSJyI3WLKGrb0YlvIYAiBjmDJaSkR4hwONvEn2tgnQCCBhkAhobiICM49hTelEpwEhAqPzyuEnCTdnGbSnRGn7EL/pzGaP4jvjUMc9Y9Y3uID7AAA=',
    },
    {
      type: 'P2WPKH',
      psbt:
        'cHNidP8BAFICAAAAAb5UIQFSoXPjqxSmuiSZkM5PjaycnrXQ6VB+u2+MzbSGAAAAAAD/////ASBOAAAAAAAAFgAUXsVBEaHSlhycDORbHHtBKwDo4zIAAAAAAAEBHzB1AAAAAAAAFgAUvIgag7HZu7Rjd/ugmJC/MHlZmAYiAgLN1zezMD4c4uegTbgfJ1GCtN5/hlJYaJt7e8mt1BVzIEcwRAIgXhgL5G81tXP7MAaKJtA0QaFu17bLocOGqxXmDoIfYUACIAOIynpoPS/dTz9Omg2h7v5kiql7ab0SPzWDdxpvpsUcAQAA',
      result:
        'cHNidP8BAFICAAAAAb5UIQFSoXPjqxSmuiSZkM5PjaycnrXQ6VB+u2+MzbSGAAAAAAD/////ASBOAAAAAAAAFgAUXsVBEaHSlhycDORbHHtBKwDo4zIAAAAAAAEBHzB1AAAAAAAAFgAUvIgag7HZu7Rjd/ugmJC/MHlZmAYBCGsCRzBEAiBeGAvkbzW1c/swBoom0DRBoW7Xtsuhw4arFeYOgh9hQAIgA4jKemg9L91PP06aDaHu/mSKqXtpvRI/NYN3Gm+mxRwBIQLN1zezMD4c4uegTbgfJ1GCtN5/hlJYaJt7e8mt1BVzIAAA',
    },
    {
      type: 'P2WSH-P2PK',
      psbt:
        'cHNidP8BAKYCAAAAAlwKQ3suPWwEJ/zQ9sZsIioOcHKU1KoLMxlMNSXVIkEWAAAAAAD/////YYDJMap+mYgbTrCNAdpWHN+EkKvl+XYao/6co/EQfwMAAAAAAP////8CkF8BAAAAAAAWABRnPBAmVHz2HL+8/1U+QG5L2thjmjhKAAAAAAAAIgAg700yfFRyhWzQnPHIUb/XQqsjlpf4A0uw682pCVWuQ8IAAAAAAAEBKzB1AAAAAAAAIgAgth9oE4cDfC5aV58VgkW5CptHsIxppYzJV8C5kT6aTo8iAgNfNgnFnEPS9s4PY/I5bezpWiAEzQ4DRTASgdSdeMM06UgwRQIhALO0xRpuqP3aVkm+DPykrtqe6fPNSgNblp9K9MAwmtHJAiAHV5ZvZN8Vi49n/o9ISFyvtHsPXXPKqBxC9m2m2HlpYgEBBSMhA182CcWcQ9L2zg9j8jlt7OlaIATNDgNFMBKB1J14wzTprAABASuAOAEAAAAAACIAILYfaBOHA3wuWlefFYJFuQqbR7CMaaWMyVfAuZE+mk6PIgIDXzYJxZxD0vbOD2PyOW3s6VogBM0OA0UwEoHUnXjDNOlIMEUCIQC6XN6tpo9mYlZej4BXSSh5D1K6aILBfQ4WBWXUrISx6wIgVaxFUsz8y59xJ1V4sZ1qarHX9pZ+MJmLKbl2ZSadisoBAQUjIQNfNgnFnEPS9s4PY/I5bezpWiAEzQ4DRTASgdSdeMM06awAAAA=',
      result:
        'cHNidP8BAKYCAAAAAlwKQ3suPWwEJ/zQ9sZsIioOcHKU1KoLMxlMNSXVIkEWAAAAAAD/////YYDJMap+mYgbTrCNAdpWHN+EkKvl+XYao/6co/EQfwMAAAAAAP////8CkF8BAAAAAAAWABRnPBAmVHz2HL+8/1U+QG5L2thjmjhKAAAAAAAAIgAg700yfFRyhWzQnPHIUb/XQqsjlpf4A0uw682pCVWuQ8IAAAAAAAEBKzB1AAAAAAAAIgAgth9oE4cDfC5aV58VgkW5CptHsIxppYzJV8C5kT6aTo8BCG4CSDBFAiEAs7TFGm6o/dpWSb4M/KSu2p7p881KA1uWn0r0wDCa0ckCIAdXlm9k3xWLj2f+j0hIXK+0ew9dc8qoHEL2babYeWliASMhA182CcWcQ9L2zg9j8jlt7OlaIATNDgNFMBKB1J14wzTprAABASuAOAEAAAAAACIAILYfaBOHA3wuWlefFYJFuQqbR7CMaaWMyVfAuZE+mk6PAQhuAkgwRQIhALpc3q2mj2ZiVl6PgFdJKHkPUrpogsF9DhYFZdSshLHrAiBVrEVSzPzLn3EnVXixnWpqsdf2ln4wmYspuXZlJp2KygEjIQNfNgnFnEPS9s4PY/I5bezpWiAEzQ4DRTASgdSdeMM06awAAAA=',
    },
  ],
  validateSignaturesOfInput: {
    psbt:
      'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgf0cwRAIgdAGK1BgAl7hzMjwAFXILNoTMgSOJEEjn282bVa1nnJkCIHPTabdA4+tT3O+jOCPIBwUUylWn3ZVE8VfBZ5EyYRGMASICAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXSDBFAiEA9hA4swjcHahlo0hSdG8BV3KTQgjG0kRUOTzZm98iF3cCIAVuZ1pnWm0KArhbFOXikHTYolqbV2C+ooFvZhkQoAbqAQEDBAEAAAABBEdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSriIGApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/ENkMak8AAACAAAAAgAAAAIAiBgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU21xDZDGpPAAAAgAAAAIABAACAAAEBIADC6wsAAAAAF6kUt/X69A49QKWkWbHbNTXyty+pIeiHIgIDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtxHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwEiAgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc0cwRAIgZfRbpZmLWaJ//hp77QFq8fH5DVSzqo90UKpfVqJRA70CIH9yRwOtHtuWaAsoS1bU/8uI9/t1nqu+CKow8puFE4PSAQEDBAEAAAABBCIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQVHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4iBgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8OcxDZDGpPAAAAgAAAAIADAACAIgYDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwQ2QxqTwAAAIAAAACAAgAAgAAiAgOppMN/WZbTqiXbrGtXCvBlA5RJKUJGCzVHU+2e7KWHcRDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
    index: 0,
    pubkey: Buffer.from(
      '029583bf39ae0a609747ad199addd634fa6108559d6c5cd39b4c2183f1ab96e07f',
      'hex',
    ),
    incorrectPubkey: Buffer.from(
      '029583bf39ae0a609747ad199addd634fa6108559d6c5cd39b4c2183f1ab96e02a',
      'hex',
    ),
    nonExistantIndex: 42,
  },
  getFeeRate: {
    psbt:
      'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgf0cwRAIgdAGK1BgAl7hzMjwAFXILNoTMgSOJEEjn282bVa1nnJkCIHPTabdA4+tT3O+jOCPIBwUUylWn3ZVE8VfBZ5EyYRGMASICAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXSDBFAiEA9hA4swjcHahlo0hSdG8BV3KTQgjG0kRUOTzZm98iF3cCIAVuZ1pnWm0KArhbFOXikHTYolqbV2C+ooFvZhkQoAbqAQEDBAEAAAABBEdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSriIGApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/ENkMak8AAACAAAAAgAAAAIAiBgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU21xDZDGpPAAAAgAAAAIABAACAAAEBIADC6wsAAAAAF6kUt/X69A49QKWkWbHbNTXyty+pIeiHIgIDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtxHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwEiAgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc0cwRAIgZfRbpZmLWaJ//hp77QFq8fH5DVSzqo90UKpfVqJRA70CIH9yRwOtHtuWaAsoS1bU/8uI9/t1nqu+CKow8puFE4PSAQEDBAEAAAABBCIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQVHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4iBgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8OcxDZDGpPAAAAgAAAAIADAACAIgYDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwQ2QxqTwAAAIAAAACAAgAAgAAiAgOppMN/WZbTqiXbrGtXCvBlA5RJKUJGCzVHU+2e7KWHcRDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
    fee: 21,
  },
  cache: {
    nonWitnessUtxo: {
      psbt:
        'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEER1IhApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/IQLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU211KuIgYClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8Q2QxqTwAAAIAAAACAAAAAgCIGAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXENkMak8AAACAAAAAgAEAAIAAAQEgAMLrCwAAAAAXqRS39fr0Dj1ApaRZsds1NfK3L6kh6IcBBCIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQVHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4iBgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8OcxDZDGpPAAAAgAAAAIADAACAIgYDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwQ2QxqTwAAAIAAAACAAgAAgAAiAgOppMN/WZbTqiXbrGtXCvBlA5RJKUJGCzVHU+2e7KWHcRDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
      nonWitnessUtxo: Buffer.from(
        '0200000001aad73931018bd25f84ae400b68848be09db706eac2ac18298babee71ab656f8b0000000048473044022058f6fc7c6a33e1b31548d481c826c015bd30135aad42cd67790dab66d2ad243b02204a1ced2604c6735b6393e5b41691dd78b00f0c5942fb9f751856faa938157dba01feffffff0280f0fa020000000017a9140fb9463421696b82c833af241c78c17ddbde493487d0f20a270100000017a91429ca74f8a08f81999428185c97b5d852e4063f618765000000',
        'hex',
      ),
      inputIndex: 0,
    },
  },
  clone: {
    psbt:
      'cHNidP8BAKYCAAAAAlwKQ3suPWwEJ/zQ9sZsIioOcHKU1KoLMxlMNSXVIkEWAAAAAAD/////YYDJMap+mYgbTrCNAdpWHN+EkKvl+XYao/6co/EQfwMAAAAAAP////8CkF8BAAAAAAAWABRnPBAmVHz2HL+8/1U+QG5L2thjmjhKAAAAAAAAIgAg700yfFRyhWzQnPHIUb/XQqsjlpf4A0uw682pCVWuQ8IAAAAAAAEBKzB1AAAAAAAAIgAgth9oE4cDfC5aV58VgkW5CptHsIxppYzJV8C5kT6aTo8iAgNfNgnFnEPS9s4PY/I5bezpWiAEzQ4DRTASgdSdeMM06UgwRQIhALO0xRpuqP3aVkm+DPykrtqe6fPNSgNblp9K9MAwmtHJAiAHV5ZvZN8Vi49n/o9ISFyvtHsPXXPKqBxC9m2m2HlpYgEBBSMhA182CcWcQ9L2zg9j8jlt7OlaIATNDgNFMBKB1J14wzTprAABASuAOAEAAAAAACIAILYfaBOHA3wuWlefFYJFuQqbR7CMaaWMyVfAuZE+mk6PIgIDXzYJxZxD0vbOD2PyOW3s6VogBM0OA0UwEoHUnXjDNOlIMEUCIQC6XN6tpo9mYlZej4BXSSh5D1K6aILBfQ4WBWXUrISx6wIgVaxFUsz8y59xJ1V4sZ1qarHX9pZ+MJmLKbl2ZSadisoBAQUjIQNfNgnFnEPS9s4PY/I5bezpWiAEzQ4DRTASgdSdeMM06awAAAA=',
  },
};
