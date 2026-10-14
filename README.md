# LH Games - Loja de Jogos (Angular + API)

Atividade 3 - Service de consumo de API, login e área restrita.

## Como rodar

São dois terminais abertos na pasta do projeto:

**Terminal 1 - API (json-server):**
```
npm run api
```
A API fica em http://localhost:3000/produtos

**Terminal 2 - Site Angular:**
```
ng serve
```
O site fica em http://localhost:4200

## Login da área restrita

- Usuário: `aluno`
- Senha: `1234`

## O que foi feito

- Tela inicial listando os produtos da API (`ProdutoService.getProdutos()`).
- Área restrita com lista, cadastro, edição e exclusão de produtos (GET, POST, PUT e DELETE).
- `ProdutoService` para o CRUD e `LoginService` para o login.
- Ao entrar, é gravado um token no `localStorage`.
- `GuardGuard` (CanActivate) bloqueia as rotas `/restrito` sem token e manda para o login.
- O menu da loja é escondido dentro da área restrita, que tem o próprio menu com botão de sair (logout).

## Testes no Postman

Com a API rodando, em `http://localhost:3000/produtos`:

| Método | URL | Body (raw / JSON) |
|---|---|---|
| GET | /produtos | - |
| POST | /produtos | `{ "id": 4, "produto": "Jogo 4", "descricao": "Descrição do Jogo 4", "foto": "jogo1.PNG", "preco": 150 }` |
| PUT | /produtos/4 | `{ "id": 4, "produto": "Jogo Modificado", "descricao": "Descrição do Jogo Modificado", "foto": "jogo1.PNG", "preco": 250 }` |
| DELETE | /produtos/4 | - |

Desenvolvido por Gabriel Rodrigues.
