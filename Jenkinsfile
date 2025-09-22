post {
    success {
        echo " CI pipeline completed successfully!"

        script {
            def slackMessage = """
            {
              "attachments": [
                {
                  "fallback": "Build #${env.BUILD_NUMBER} of job '${env.JOB_NAME}' succeeded.",
                  "pretext": "Build Succeeded :tada:",
                  "color": "#36a64f",
                  "fields": [
                    {
                      "title": "Build Number",
                      "value": "${env.BUILD_NUMBER}",
                      "short": true
                    },
                    {
                      "title": "Job Name",
                      "value": "${env.JOB_NAME}",
                      "short": true
                    },
                    {
                      "title": "Deployed To",
                      "value": "<https://dashboard.render.com/web/new?newUser=true|Render Dashboard>",
                      "short": false
                    }
                  ]
                }
              ]
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
