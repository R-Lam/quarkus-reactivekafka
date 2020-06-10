package org.rlam.kafka;

import javax.enterprise.context.ApplicationScoped;

import org.eclipse.microprofile.reactive.messaging.Incoming;
import org.eclipse.microprofile.reactive.messaging.Outgoing;

import io.smallrye.reactive.messaging.annotations.Broadcast;

@ApplicationScoped
public class Consumer {

    @Incoming("Topic2")
    @Outgoing("my-data-stream")
    @Broadcast
    public String process(String message) {
        return message;
    }
    
}