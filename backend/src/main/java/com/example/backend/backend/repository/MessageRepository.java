package com.example.backend.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.backend.model.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {
    
}
