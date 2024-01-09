pipeline {
    agent any

    tools {nodejs 'node-21.5.0'}

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
                    // Deploy to GitHub Pages
                    sh 'gh-pages -d build'
                }
            }
        }
    }
}