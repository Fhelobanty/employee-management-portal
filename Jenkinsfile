pipeline {
agent any

```
stages {

    stage('Checkout') {
        steps {
            checkout scm
        }
    }

    stage('Build Backend') {
        steps {
            dir('backend') {
                sh 'npm install'
            }
        }
    }

    stage('Build Frontend') {
        steps {
            dir('frontend') {
                sh 'npm install'
            }
        }
    }

    stage('Build Backend Docker Image') {
        steps {
            sh 'docker build -t employee-backend:latest ./backend'
        }
    }

    stage('Build Frontend Docker Image') {
        steps {
            sh 'docker build -t employee-frontend:latest ./frontend'
        }
    }

    stage('List Docker Images') {
        steps {
            sh 'docker images'
        }
    }
}
```

}
