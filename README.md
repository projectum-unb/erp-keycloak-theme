# :wind_face: Keywind

Tema do Keycloak para o projeto ERP baseado no tema [Keywind](https://github.com/lukin/keywind).

Para mais informações sobre como customizar o tema, confirma a página inicial do projeto no Github.

## Instalação

Se houver qualquer mudança nos arquivos de template, recomenda-se executar os comandos abaixo
para que sejam geradas novas classes do Tailwind para os componentes:

```bash
npm install
npm run build
```

> As alterações identificadas pelo Git no diretório `theme/keywind/login` podem ser commitadas
em conjunto.

Após isto, execute os seguintes passos:

- Remover o conteúdo do diretório `<ERP-INFRA-HOME>/erp-keycloak/themes/erp/login`
- Copiar o diretório `themes/keywind/login` para `<ERP-INFRA-HOME>/erp-keycloak/themes/erp/login`

Como o build gera arquivos com nomes aleatórios, isto garantirá que não sobre arquivos gerados
por builds anteriores.
