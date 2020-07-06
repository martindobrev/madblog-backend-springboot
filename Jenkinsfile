pipeline {
    agent any
    tools {
        maven 'Maven-3.6.2'
        jdk 'AdoptOpenJDK_11.0.4' 
    }
    stages {
        stage('build') {
            steps {
                sh 'mvn clean package'
            }
        }
    }
}
