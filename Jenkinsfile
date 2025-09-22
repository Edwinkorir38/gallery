pipeline {
    agent any

    tools {
        nodejs "NodeJS"  // Make sure this matches your Jenkins NodeJS tool name
    }

    environment {
        NODE_ENV = 'test'                       // Set NODE_ENV to test globally
        MONGODB_URI = credentials('MONGO_URI_TEST') // Inject your test DB URI securely
        SLACK_WEBHOOK_URL = credentials('slack-webhook') // <-- Add this line
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

        // Uncomment if you have a build step
        // stage('Build') {
        //     steps {
        //         sh 'npm run build'
        //     }
        // }

        stage('Run Tests') {
            steps {
                echo "Running tests with NODE_ENV=${env.NODE_ENV}"
                sh 'npm test'
            }
        }

        stage('Start Server') {
            steps {
                echo "Skipping start during CI - Render will handle deployment"
            }
        }
    }

    post {
        success {
            echo " CI pipeline completed successfully!"

            script {
                def slackMessage = """
                {
                  "text": "*Build #${env.BUILD_NUMBER}* of job '${env.JOB_NAME}' completed successfully!\\n Deployed to: https://dashboard.render.com/web/new?newUser=true"
                }
                """

                sh """
                    curl -X POST -H 'Content-type: application/json' \
                    --data '${slackMessage}' \
                    ${env.SLACK_WEBHOOK_URL}
                """
            }
        }
        failure {
            echo "Pipeline failed!"

            // Email notification on failure
            mail to: 'ekorir99@gmail.com',
                 subject: " Jenkins Pipeline Failed - Gallery Project",
                 body: """\
Hi Team,

The Jenkins pipeline has failed during execution.

 Job: ${env.JOB_NAME}
 Build: #${env.BUILD_NUMBER}
 URL: ${env.BUILD_URL}

Please check the logs and fix the issue.

Regards,
Jenkins Bot
"""
        }
    }
}
