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

    stage('npm deploy') {
      steps {
        sh 'npm publish'
      }
    }

  }
  post{
      always {
          archiveArtifacts(artifacts: 'coverage/*', fingerprint: true, onlyIfSuccessful: false)
          junit("coverage/clover.xml")
      }
  }
}