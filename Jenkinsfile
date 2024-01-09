pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
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