pipeline {
  agent any
  stages {
    stage('Install Dependances') {
      steps {
        sh 'yarn install'
      }
    }

    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }

    stage('npm deploy') {
      steps {
        sh 'npm publish'
      }
    }

  }
}