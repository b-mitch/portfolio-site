pipeline {
    agent any

    environment {
        GIT_COMMITTER_NAME = 'b-mitch'
        GIT_COMMITTER_EMAIL = 'bmitchum.dev@gmail.com'
    }

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
                    // Configure git name and email
                    sh 'git config --global user.name $GIT_COMMITTER_NAME'
                    sh 'git config --global user.email $GIT_COMMITTER_EMAIL'
                    // Deploy to GitHub Pages using credentials
                    withCredentials([usernamePassword(credentialsId: 'dcf69d95-b6c6-4d70-80bf-f7a0c78f5072', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD')]) {
                        sh '''
                        git config --global user.name "${GIT_USERNAME}"
                        git config --global user.password "${GIT_PASSWORD}"
                        yarn run deploy
                        '''
                    }
                }
            }
        }
    }
}