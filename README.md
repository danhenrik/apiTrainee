### .env
O arquivo `.env` deve ficar na root com as seguintes variáveis:
```
DB = nome do banco de dados
DB_USER = usuário do banco de dados
DB_PASSWORD = senha do banco de dados
DB_HOST = onde o banco de dados está hosteado
SECRET_KEY = a secret key usada pra gerar o jwt
NODE_ENV = "development" ou "production" 
REDIS_HOST= onde o redis está rodando
PORT= porta que a api escutará
JWT_EXPIRATION = duração do jwt, por exemplo: 10m para 10 minutos, 600 para 600 segundos (10 minutos)
HOST_URL= url onde está hospedada a api
MAIL_USR = gmailUsr (email address)
MAIL_PWD = gmailPwd
```
Nessa parte de email é necessário as credenciais de um email real do google para enviar os emails de esqueci a senha. Para funcionar vc deve entrar [aqui](https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4MtkSLOQcnXIe3rsHXXooYTbq1_6qRFgw3XE5S2XJOJTCDzW3LH2R7vLqasO33mfgmRmvPNv26rbFMoBlkOXy1MM_xeeg) com o email colocado no env e habilitar (opcional desde que não utilize os endpoints de forgotPassword). 

## Servidor Redis
Para rodar a API é necessário ter um servidor [Redis](https://redis.io) rodando na sua máquina. Caso seu SO seja Windows, baixe o .zip da release mais recente nesse [repositório](https://github.com/microsoftarchive/redis/releases) e rode o executável `redis-server.exe`. Se seu SO for UNIX, basta seguir as instruções dadas nessa [página](https://redis.io/download).

## Documentação:
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/14887511-eb3bbe14-26a1-41d9-9934-64c2d8a2b967?action=collection%2Ffork&collection-url=entityId%3D14887511-eb3bbe14-26a1-41d9-9934-64c2d8a2b967%26entityType%3Dcollection%26workspaceId%3D8cf67e7f-4de0-420b-a9c7-8e6bf5803acd)
