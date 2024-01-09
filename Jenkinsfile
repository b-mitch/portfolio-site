pipeline {
    agent any

    tools {nodejs 'node'}

    stages {
        stage('Build') {
            steps {
                script {
                    // Check node and yarn versions
                    sh 'node -v'
                    sh 'yarn --version'
                    // Install dependencies and build the React app
                    sh 'yarn install'
                    sh 'yarn build'
                }
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                script {
                    // Configure git credentials and deploy to GitHub Pages
                    withCredentials([usernamePassword(credentialsId: 'dcf69d95-b6c6-4d70-80bf-f7a0c78f5072', variable: 'GIT_PAT')]) {
                        sh "git config --global credential.helper store"
                        sh "echo 'https://b-mitch:${GIT_PAT}@github.com' > ~/.git-credentials"
                        sh 'yarn run deploy'
                    }
                }
            }
        }
    }
}