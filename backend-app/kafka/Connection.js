// var kafka = require('kafka-node');

// function ConnectionProvider() {
//     this.getConsumer = function(topic_name) {
//         if (!this.kafkaConsumerConnection) {
//             this.client = new kafka.KafkaClient({ kafkaHost: "127.0.0.1:2181" });
//             this.kafkaConsumerConnection = new kafka.Consumer(
//                 this.client,
//                 [{ topic: topic_name, partition: 0 }],
//                 {
//                     autoCommit: true
//                 }
//             );

//             this.client.on('ready', function () {
//                 console.log('Kafka client ready for consumer!');
//             });

//             this.client.on('error', function (err) {
//                 console.error('Kafka client error:', err);
//             });
//         }
//         return this.kafkaConsumerConnection;
//     };

//     this.getProducer = function() {
//         if (!this.kafkaProducerConnection) {
//             this.client = new kafka.KafkaClient({ kafkaHost: "127.0.0.1:2181" });
//             var Producer = kafka.Producer;
//             this.kafkaProducerConnection = new Producer(this.client);

//             this.client.on('ready', function () {
//                 console.log('Kafka producer ready');
//             });

//             this.client.on('error', function (err) {
//                 console.error('Kafka client error:', err);
//             });
//         }
//         return this.kafkaProducerConnection;
//     };
// }

// exports = module.exports = new ConnectionProvider();





// var kafka = require('kafka-node');

// function ConnectionProvider() {
//     this.getConsumer = function(topic_name) {
//         if (!this.kafkaConsumerConnection) {
//             // Updated to use correct Kafka broker host
//             this.client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" }); 
//             this.kafkaConsumerConnection = new kafka.Consumer(
//                 this.client,
//                 [{ topic: topic_name, partition: 0 }],
//                 {
//                     autoCommit: true
//                 }
//             );
//             this.client.on('ready', function () {
//                 console.log('Kafka client ready for consumer!');
//             });

//             this.client.on('error', function (err) {
//                 console.error('Kafka client error:', err);
//             });
//         }
//         return this.kafkaConsumerConnection;
//     };

//     this.getProducer = function() {
//         if (!this.kafkaProducerConnection) {
//             // Updated to use correct Kafka broker host
//             this.client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
//             var HighLevelProducer = kafka.HighLevelProducer;
//             this.kafkaProducerConnection = new HighLevelProducer(this.client);

//             this.client.on('ready', function () {
//                 console.log('Kafka producer ready');
//             });

//             this.client.on('error', function (err) {
//                 console.error('Kafka client error:', err);
//             });
//         }
//         return this.kafkaProducerConnection;
//     };
// }

// exports = module.exports = new ConnectionProvider();



var kafka = require('kafka-node');

function ConnectionProvider() {
    this.getConsumer = function(topic_name) {
        if (!this.kafkaConsumerConnection) {
            // Use KafkaClient instead of Client
            this.client = new kafka.KafkaClient({ kafkaHost: "localhost:2181" });
            this.kafkaConsumerConnection = new kafka.Consumer(
                this.client,
                [{ topic: topic_name, partition: 0 }]
            );
            this.client.on('ready', function () {
                console.log('Kafka client ready for consumer!');
            });
        }
        return this.kafkaConsumerConnection;
    };

    this.getProducer = function() {
        if (!this.kafkaProducerConnection) {
            // Use KafkaClient instead of Client
            this.client = new kafka.KafkaClient({ kafkaHost: "localhost:2181" });
            var HighLevelProducer = kafka.HighLevelProducer;
            this.kafkaProducerConnection = new HighLevelProducer(this.client);
            console.log('Kafka producer ready');
        }
        return this.kafkaProducerConnection;
    };
}

exports = module.exports = new ConnectionProvider();
