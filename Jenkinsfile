
pipeline {
    agent { label 'built-in' }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out Employee Management System code'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Installing Node.js dependencies'
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running application checks'
                dir('backend') {
                    sh 'node --check app.js'
                }
            }
        }

        stage('Complete') {
            steps {
                echo 'CI Pipeline completed successfully!'
            }
        }
    }
}
