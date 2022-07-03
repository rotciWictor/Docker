docker run -d -p 9000:9000 -v jsonserverdata:/data --name serverjson --network minha-rede rotciwictor/serverjson
docker run -d -p 8080:8080 --name app rotciwictor/email-list:v2
 
