# :wind_face: Keywind

Tema do Keycloak para o projeto ERP baseado no tema [Keywind](https://github.com/lukin/keywind).

Para mais informações sobre como customizar o tema, confirma a página inicial do projeto no Github.

## Instalação

Se houver qualquer mudança nos arquivos de template, recomenda-se executar os comandos abaixo
para que sejam geradas novas classes do Tailwind para os componentes:

```bash
npm install
npm run build
npm run build:jar
```

> As alterações identificadas pelo Git no diretório `theme/keywind/login` podem ser commitadas
em conjunto.

Para atualizar o Keycloak do projeto `erp-infraestrutura-backend`, execute os seguintes passos:

- Remova o arquivo: `<ERP_INFRA_HOME>/erp-keycloak/providers/erp/erp-theme.jar`
- Copie o arquivo `out/erp-theme.jar` para `<ERP_INFRA_HOME>/erp-keycloak/providers`

O tema estará automaticamente atualizado.
