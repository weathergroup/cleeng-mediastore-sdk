const checkmarkIconBase =
  'data:image/svg+xml;base64,PHN2ZyBpZD0iQ29tcG9uZW50XzEwXzEiIGNvbG9yPSdyZWQnIGRhdGEtbmFtZT0iQ29tcG9uZW50IDEwIOKAkyAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAuNzE4IiBoZWlnaHQ9IjczLjIzNyIgdmlld0JveD0iMCAwIDEwMC43MTggNzMuMjM3Ij4NCiAgPGcgaWQ9Ikdyb3VwXzIwODYiIGRhdGEtbmFtZT0iR3JvdXAgMjA4NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzMzUgLTQwMjguMTYyKSIgZmlsbD0icmVkIj4NCiAgICA8ZyBpZD0iR3JvdXBfMjA4NSIgZGF0YS1uYW1lPSJHcm91cCAyMDg1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzQ4LjQ3IC0yNzUpIj4NCiAgICAgIDxnIGlkPSJHcm91cF8yMDgxIiBkYXRhLW5hbWU9Ikdyb3VwIDIwODEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgNikiPg0KICAgICAgICA8ZyBpZD0iR3JvdXBfMTg4MiIgZGF0YS1uYW1lPSJHcm91cCAxODgyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MS4wMDEgMzQwNSkiPg0KICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzEzNjAiIGRhdGEtbmFtZT0iUGF0aCAxMzYwIiBkPSJNNDE2NS41NzQtMzE1LjU5MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNTQuMDEgMTI2MS43OTIpIiBmaWxsPSIjYmNjM2NkIiBzdHJva2U9IiM4MzhlYWEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxNyIvPg0KICAgICAgICAgIDxnIGlkPSJHcm91cF8xODQ4IiBkYXRhLW5hbWU9Ikdyb3VwIDE4NDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwMjQuODQzIDg5Mi4xNjIpIj4NCiAgICAgICAgICAgIDxnIGlkPSJHcm91cF8xODQ0IiBkYXRhLW5hbWU9Ikdyb3VwIDE4NDQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMy45NCkiPg0KICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXBfMTg0MiIgZGF0YS1uYW1lPSJHcm91cCAxODQyIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBpZD0iUGF0aF8xMzkyIiBkYXRhLW5hbWU9IlBhdGggMTM5MiIgZD0iTTQ2NjEuOTI1LTE1Ni43NjVoLTEuNTcyYS43NjIuNzYyLDAsMCwxLS43NjItLjc2Mi43NjIuNzYyLDAsMCwxLC43NjItLjc2MmgxLjU3MmEuNzYyLjc2MiwwLDAsMSwuNzYyLjc2MkEuNzYyLjc2MiwwLDAsMSw0NjYxLjkyNS0xNTYuNzY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ2NTkuNTkxIDE1OC4yODkpIiBmaWxsPSIjYmNjM2NkIi8+DQogICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwXzE4NDMiIGRhdGEtbmFtZT0iR3JvdXAgMTg0MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4zMDgpIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBpZD0iUGF0aF8xMzkzIiBkYXRhLW5hbWU9IlBhdGggMTM5MyIgZD0iTTQ3NTMuMDA3LTE1Ni43NjVoLTEuNTcyYS43NjIuNzYyLDAsMCwxLS43NjItLjc2Mi43NjIuNzYyLDAsMCwxLC43NjItLjc2MmgxLjU3MmEuNzYyLjc2MiwwLDAsMSwuNzYyLjc2MkEuNzYyLjc2MiwwLDAsMSw0NzUzLjAwNy0xNTYuNzY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ3NTAuNjczIDE1OC4yODkpIiBmaWxsPSIjYmNjM2NkIi8+DQogICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDxnIGlkPSJHcm91cF8xODQ3IiBkYXRhLW5hbWU9Ikdyb3VwIDE4NDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuOTQgMCkiPg0KICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXBfMTg0NSIgZGF0YS1uYW1lPSJHcm91cCAxODQ1Ij4NCiAgICAgICAgICAgICAgICA8cGF0aCBpZD0iUGF0aF8xMzk0IiBkYXRhLW5hbWU9IlBhdGggMTM5NCIgZD0iTTQ3MTcuMjQzLTIxMi4wODJhLjc2MS43NjEsMCwwLDEtLjc2Mi0uNzYydi0xLjU3MmEuNzYxLjc2MSwwLDAsMSwuNzYyLS43NjIuNzYyLjc2MiwwLDAsMSwuNzYyLjc2MnYxLjU3MkEuNzYyLjc2MiwwLDAsMSw0NzE3LjI0My0yMTIuMDgyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ3MTYuNDgxIDIxNS4xNzgpIiBmaWxsPSIjYmNjM2NkIi8+DQogICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwXzE4NDYiIGRhdGEtbmFtZT0iR3JvdXAgMTg0NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA2LjMwOCkiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzEzOTUiIGRhdGEtbmFtZT0iUGF0aCAxMzk1IiBkPSJNNDcxNy4yNDMtMTIxYS43NjEuNzYxLDAsMCwxLS43NjItLjc2MnYtMS41NzJhLjc2MS43NjEsMCwwLDEsLjc2Mi0uNzYyLjc2Mi43NjIsMCwwLDEsLjc2Mi43NjJ2MS41NzJBLjc2Mi43NjIsMCwwLDEsNDcxNy4yNDMtMTIxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ3MTYuNDgxIDEyNC4wOTcpIiBmaWxsPSIjYmNjM2NkIi8+DQogICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICA8L2c+DQogICAgICAgICAgPGcgaWQ9Ikdyb3VwXzE4NTUiIGRhdGEtbmFtZT0iR3JvdXAgMTg1NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTk0MC4xNzggOTUyLjA5OSkgcm90YXRlKDQ1KSI+DQogICAgICAgICAgICA8ZyBpZD0iR3JvdXBfMTg1MSIgZGF0YS1uYW1lPSJHcm91cCAxODUxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDMuOTQpIj4NCiAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwXzE4NDkiIGRhdGEtbmFtZT0iR3JvdXAgMTg0OSI+DQogICAgICAgICAgICAgICAgPHBhdGggaWQ9IlBhdGhfMTM5NiIgZGF0YS1uYW1lPSJQYXRoIDEzOTYiIGQ9Ik0zNTE1Ljk4My04MjIuNmgtMS41NzJhLjc2Mi43NjIsMCwwLDEtLjc2Mi0uNzYyLjc2Mi43NjIsMCwwLDEsLjc2Mi0uNzYyaDEuNTcyYS43NjIuNzYyLDAsMCwxLC43NjIuNzYyQS43NjIuNzYyLDAsMCwxLDM1MTUuOTgzLTgyMi42WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM1MTMuNjQ5IDgyNC4xMjIpIiBmaWxsPSIjYmNjM2NkIi8+DQogICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwXzE4NTAiIGRhdGEtbmFtZT0iR3JvdXAgMTg1MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4zMDgpIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBpZD0iUGF0aF8xMzk3IiBkYXRhLW5hbWU9IlBhdGggMTM5NyIgZD0iTTM2MDcuMDY0LTgyMi42aC0xLjU3MmEuNzYyLjc2MiwwLDAsMS0uNzYyLS43NjIuNzYyLjc2MiwwLDAsMSwuNzYyLS43NjJoMS41NzJhLjc2Mi43NjIsMCwwLDEsLjc2Mi43NjJBLjc2Mi43NjIsMCwwLDEsMzYwNy4wNjQtODIyLjZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzYwNC43MyA4MjQuMTIyKSIgZmlsbD0iI2JjYzNjZCIvPg0KICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8ZyBpZD0iR3JvdXBfMTg1NCIgZGF0YS1uYW1lPSJHcm91cCAxODU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjk0IDApIj4NCiAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwXzE4NTIiIGRhdGEtbmFtZT0iR3JvdXAgMTg1MiI+DQogICAgICAgICAgICAgICAgPHBhdGggaWQ9IlBhdGhfMTM5OCIgZGF0YS1uYW1lPSJQYXRoIDEzOTgiIGQ9Ik0zNTcxLjMtODc3LjkxNmEuNzYyLjc2MiwwLDAsMS0uNzYyLS43NjJ2LTEuNTcyYS43NjIuNzYyLDAsMCwxLC43NjItLjc2Mi43NjIuNzYyLDAsMCwxLC43NjIuNzYydjEuNTcyQS43NjIuNzYyLDAsMCwxLDM1NzEuMy04NzcuOTE2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM1NzAuNTM5IDg4MS4wMTIpIiBmaWxsPSIjYmNjM2NkIi8+DQogICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwXzE4NTMiIGRhdGEtbmFtZT0iR3JvdXAgMTg1MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA2LjMwOCkiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzEzOTkiIGRhdGEtbmFtZT0iUGF0aCAxMzk5IiBkPSJNMzU3MS4zLTc4Ni44MzRhLjc2Mi43NjIsMCwwLDEtLjc2Mi0uNzYydi0xLjU3MmEuNzYyLjc2MiwwLDAsMSwuNzYyLS43NjIuNzYyLjc2MiwwLDAsMSwuNzYyLjc2MnYxLjU3MkEuNzYyLjc2MiwwLDAsMSwzNTcxLjMtNzg2LjgzNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNTcwLjUzOSA3ODkuOTMpIiBmaWxsPSIjYmNjM2NkIi8+DQogICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICAgICAgPGcgaWQ9IkVsbGlwc2VfMzc4IiBkYXRhLW5hbWU9IkVsbGlwc2UgMzc4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTkxLjAwMSA0MzAzKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODM4ZWFhIiBzdHJva2Utd2lkdGg9IjEiPg0KICAgICAgICAgIDxjaXJjbGUgY3g9IjMiIGN5PSIzIiByPSIzIiBzdHJva2U9Im5vbmUiLz4NCiAgICAgICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMi41IiBmaWxsPSJub25lIi8+DQogICAgICAgIDwvZz4NCiAgICAgICAgPGcgaWQ9IkVsbGlwc2VfMzgzIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzgzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDc4LjAwMSA0MzU3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODM4ZWFhIiBzdHJva2Utd2lkdGg9IjEiPg0KICAgICAgICAgIDxjaXJjbGUgY3g9IjMiIGN5PSIzIiByPSIzIiBzdHJva2U9Im5vbmUiLz4NCiAgICAgICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMi41IiBmaWxsPSJub25lIi8+DQogICAgICAgIDwvZz4NCiAgICAgIDwvZz4NCiAgICA8L2c+DQogIDwvZz4NCiAgPGcgaWQ9ImNoZWNrZWRfMl8iIGRhdGEtbmFtZT0iY2hlY2tlZCgyKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcgMTMuODM4KSI+DQogICAgPGcgaWQ9Ikdyb3VwXzI4NDMiIGRhdGEtbmFtZT0iR3JvdXAgMjg0MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuOTIyIDUuNzc5KSI+DQogICAgICA8ZyBpZD0iR3JvdXBfMjg0MiIgZGF0YS1uYW1lPSJHcm91cCAyODQyIj4NCiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMTk2OCIgZGF0YS1uYW1lPSJQYXRoIDE5NjgiIGQ9Ik0xNTUuMzMsNjQuODM3YTEuNzMzLDEuNzMzLDAsMCwwLTIuNDUxLDBsLTIwLjgsMjAuNzQzLTcuNS04LjE1YTEuNzM0LDEuNzM0LDAsMSwwLTIuNTUxLDIuMzQ5bDguNzI2LDkuNDc3YTEuNzMyLDEuNzMyLDAsMCwwLDEuMjM4LjU1OWguMDM3YTEuNzM1LDEuNzM1LDAsMCwwLDEuMjI0LS41MDZsMjIuMDc1LTIyLjAxOEExLjczMywxLjczMywwLDAsMCwxNTUuMzMsNjQuODM3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMS41NjggLTY0LjMyNykiIGZpbGw9IiNiY2MzY2QiLz4NCiAgICAgIDwvZz4NCiAgICA8L2c+DQogICAgPGcgaWQ9Ikdyb3VwXzI4NDUiIGRhdGEtbmFtZT0iR3JvdXAgMjg0NSI+DQogICAgICA8ZyBpZD0iR3JvdXBfMjg0NCIgZGF0YS1uYW1lPSJHcm91cCAyODQ0Ij4NCiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMTk2OSIgZGF0YS1uYW1lPSJQYXRoIDE5NjkiIGQ9Ik00NC4yNjYsMjEuMjY2QTEuNzM0LDEuNzM0LDAsMCwwLDQyLjUzMywyMywxOS41MzMsMTkuNTMzLDAsMSwxLDIzLDMuNDY3LDEuNzM0LDEuNzM0LDAsMSwwLDIzLDAsMjMsMjMsMCwxLDAsNDYsMjMsMS43MzQsMS43MzQsMCwwLDAsNDQuMjY2LDIxLjI2NloiIGZpbGw9IiNiY2MzY2QiLz4NCiAgICAgIDwvZz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K';

export default checkmarkIconBase;