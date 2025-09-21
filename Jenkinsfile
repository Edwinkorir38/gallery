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
                    echo " Current environment: PRODUCTION"
                    echo "Using Mongo URI (not printed for security)"
                    // You can use this inside your test scripts
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo "No tests implemented yet"
                // In future: sh 'npm test'
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
