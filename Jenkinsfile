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

    stage('Docker Validation') {
        steps {
            sh 'docker --version'
        }
    }
}
```

}
