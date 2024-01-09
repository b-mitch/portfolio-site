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
                    withCredentials([usernamePassword(credentialsId: 'dcf69d95-b6c6-4d70-80bf-f7a0c78f5072', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PAT')]) {
                        sh '''
                        git config --global credential.helper '!f() { echo "username=${GIT_USERNAME}"; echo "password=${GIT_PAT}"; }; f'
                        git config --global user.email "bmitchum.dev@gmail.com"
                        git config --global user.name "b-mitch_jenkins"
                        git config --global user.password "${GIT_PAT}"
                        git config --global credential.helper "store --file ~/.git-credentials"
                        '''
                        sh 'yarn run deploy'
                    }
                }
            }
        }
    }
}