pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    environment {
        MONGO_URI_PRODUCTION  = credentials('MONGO_URI_PRODUCTION')
        MONGO_URI_DEVELOPMENT = credentials('MONGO_URI_DEVELOPMENT')
        MONGO_URI_TEST        = credentials('MONGO_URI_TEST')
        PORT = '5000'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Edwinkorir38/gallery.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Debug Env Injection') {
            steps {
                script {
                    echo "Env variables injected."
                    echo "Current environment: PRODUCTION (default)"
                    echo "Mongo URIs are set (hidden for security)."
                }
            }
        }

        stage('Run Tests') {
            environment {
                NODE_ENV = 'test'
                MONGO_URI = "${MONGO_URI_TEST}"
            }
            steps {
                sh 'npm test'
            }
        }

        stage('Start Server') {
            steps {
                echo "Skipping start in CI - Render handles deployment"
            }
        }
    }

    post {
        success {
            echo "CI pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed!"
        }
    }
}
