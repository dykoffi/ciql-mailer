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
        sh 'yarn test-cover'
      }
    }

  }
  post{
      always {
          archiveArtifacts(artifacts: 'coverage/*', fingerprint: true, onlyIfSuccessful: false)
          junit("junit.xml")
      }
  }
}