# RUNNING KEYLCOAK DOCKER INSTANCE WITH DEMO REALM TO SECURE THIS API

You have to import the Demo-realm.json when running the keycloak docker container. For that replace the $PATH_TO_FILE with the real path of the file on your system.
Then run the following command:

'''
docker run -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -e KEYCLOAK_IMPORT=/tmp/Demo-realm.json -v /PATH_TO_FILE(Demo-realm.json:/tmp/Demo-realm.json -p 8080:8080 jboss/keycloak:8.0.1
'''


After that login to localhost:8080 with admin/admin and import the users located in Demo-users-0.json from the web  