const seleniumServer = require('selenium-server');
const phantomjs = require('phantomjs-prebuilt');
const chromedriver = require('chromedriver');

const phantons = './phantomjs.exe' || './drivers/phantomjs';

require('nightwatch-cucumber')({
    // nightwatchClientAsParameter: true,
    //  runner: 'cucumber',
    cucumberArgs: [
        '--require', 'features/support/hooks.js',
        '--require', 'features/step_definitions',
        

       //'--out', 'report',
        '--format', 'json:features/reports/cucumber_report.json',
        //  '--format', 'pretty:stdout',
        //   '--require', 'features/support_files/html.report.js',
        'features'
    ]
});

module.exports = {
    src_folders: ['features'],
    output_folder: 'features/reports',
    custom_commands_path: '',
    custom_assertions_path: '',
    page_objects_path: '',
    live_output: false,
    disable_colors: false,
    // test_workers: {
    //  enabled: true,
    //  workers: 'auto'
    // },

    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        host: '127.0.0.1',
        port: 4444
    },

    test_settings: {
        default: {
            launch_url: 'http://localhost',
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            request_timeout_options: {
                timeout: 15000,
                retry_attempts: 5
            },
            // screenshots: {
            //     enabled: true,
            //     on_failure: true,
            //     on_error: false,
            //     path: 'features/screenshots/default'
            // },
            desiredCapabilities: {
                browserName: 'phantomjs',
                javascriptEnabled: true,
                databaseEnabled: true,
                locationContextEnabled: true,
                applicationCacheEnabled: true,
                browserConnectionEnabled: true,
                webStorageEnabled: true,
                acceptSslCerts: true,
                rotatable: true,
                nativeEvents: true,
                'phantomjs.binary.path': phantons
            }
        },

        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                databaseEnabled: true,
                locationContextEnabled: true,
                applicationCacheEnabled: true,
                browserConnectionEnabled: true,
                webStorageEnabled: true,
                acceptSslCerts: true,
                rotatable: true,
                nativeEvents: true,
                chromeOptions: {
                    args: ["window-size=1920,1080"]
                }
            },
            selenium: {
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path
                }
            }
        },

        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                databaseEnabled: true,
                locationContextEnabled: true,
                applicationCacheEnabled: true,
                browserConnectionEnabled: true,
                webStorageEnabled: true,
                acceptSslCerts: true,
                rotatable: true,
                nativeEvents: true,
            }
        }
    }
};


