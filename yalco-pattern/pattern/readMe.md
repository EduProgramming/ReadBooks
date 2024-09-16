# 객체지향 패턴

https://yalco.notion.site/OODP-Example-Codes-Materials

## Structural Patterns

### Facade

파사드 패턴 : 복잡한 시스템을 간단히 사용할 수 있도록 한 패턴

서비 시스템의 복잡성을 통합 인터페이스로 감춰 클라이언트가 쉽게 이용할 수 있도록 한다.

Example)

- 집안의 여러 전자기기를 스마트홈 시스템을 통해 조작

[Facade Source](./src/facade/)

- system.ts
- smart.ts

- 파일 읽기, 쓰기, 삭제 기능을 통합

Cannot find module 'fs' or its corresponding type declarations.

```bash
$ npm install -D @types/node
```

**tsconfig.json**

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "types": ["node"]
  }
}
```

[Facade Source](./src/facade/)

- file.ts
- fileSystem.ts

해당 기능은 node에서 활용 가능. 파일 읽고 쓰는 권한은 백엔드에서 가능하다.
