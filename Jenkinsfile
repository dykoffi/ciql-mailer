pipeline {
  agent any
  stages {
    stage('Install Dependances') {
      steps {
        sh 'yarn install --frozen-lockfile'
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
          archiveArtifacts artifacts: 'coverage/*, junit.xml', fingerprint: true
          junit 'junit.xml'
      }
  }
}