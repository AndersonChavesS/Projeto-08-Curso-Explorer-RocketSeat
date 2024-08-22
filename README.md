# Projeto de Cálculo de IMC

Este projeto é uma aplicação web simples para calcular o Índice de Massa Corporal (IMC) de um usuário com base no peso e altura fornecidos.

## Estrutura do Projeto

- `index.html`: Contém o formulário para entrada de dados (peso e altura).
- `script.js`: Contém a lógica para calcular o IMC e manipular o modal.
- `modal.js`: Contém a definição do modal usado para exibir a mensagem de resultado.

## Como Funciona

1. O usuário insere seu peso (em kg) e altura (em cm) no formulário.
2. Ao submeter o formulário, a função `onsubmit` é chamada, que previne o comportamento padrão do formulário.
3. Os valores de peso e altura são convertidos para números.
4. A função `IMC` é chamada para calcular o IMC com base nos valores fornecidos.
5. O resultado do IMC é exibido em um modal.

## Funções Principais

### `IMC(weight, height)`

Calcula o Índice de Massa Corporal (IMC) com base no peso e altura fornecidos.

- **Parâmetros:**
  - `weight`: Peso em quilogramas.
  - `height`: Altura em centímetros.

- **Retorno:**
  - O valor do IMC arredondado para uma casa decimal.

### `form.onsubmit`

Função que é chamada quando o formulário é submetido. Ela previne o comportamento padrão do formulário, calcula o IMC e exibe o resultado em um modal.

## Exemplo de Uso

1. Abra o `index.html` em um navegador web.
2. Insira seu peso e altura nos campos apropriados.
3. Clique no botão de submissão para ver seu IMC calculado e exibido em um modal.

## Dependências

- Nenhuma dependência externa é necessária para este projeto.

## Autor

- Anderson Chaves