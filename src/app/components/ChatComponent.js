"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./ChatComponent.module.css";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isBooking, setIsBooking] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesListRef = useRef(null);
  let messageIndex = 0;
  let isActive = true;

  // Available time slots
  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  // Generate next 7 days for booking
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      // Skip weekends if needed
      const dayOfWeek = date.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push({
          date: date,
          formatted: date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          }),
          value: date.toISOString().split("T")[0],
        });
      }
    }

    return dates;
  };

  const availableDates = getAvailableDates();

  // Complete conversation flow with date picker as an assistant message
  const conversationFlow = [
    {
      text: "Hi there! How can I help you today?",
      brand: "ChatHead AI",
      avatar: "🤖",
      type: "assistant",
      user: "AI Assistant",
    },
    {
      text: "I need help with my subscription plan",
      brand: "John Doe",
      avatar: "👤",
      type: "user",
      user: "Customer",
    },
    {
      text: "Of course! Let me check your account details",
      brand: "ChatHead AI",
      avatar: "🤖",
      type: "assistant",
      user: "AI Assistant",
    },
    {
      text: "I see you're on the basic plan. Would you like to upgrade to premium?",
      brand: "ChatHead AI",
      avatar: "🤖",
      type: "assistant",
      user: "AI Assistant",
    },
    {
      text: "What's included in the premium plan?",
      brand: "John Doe",
      avatar: "👤",
      type: "user",
      user: "Customer",
    },
    {
      text: "Premium includes 24/7 support, unlimited chats, and advanced AI features! 🚀",
      brand: "ChatHead AI",
      avatar: "🤖",
      type: "assistant",
      user: "AI Assistant",
    },
    {
      text: "That sounds amazing! I'll upgrade right away",
      brand: "John Doe",
      avatar: "👤",
      type: "user",
      user: "Customer",
    },
    {
      text: "Excellent choice! I've sent the upgrade link to your email 📧",
      brand: "ChatHead AI",
      avatar: "🤖",
      type: "assistant",
      user: "AI Assistant",
    },
    {
      text: "By the way, would you like to schedule a consultation call with our team?",
      brand: "ChatHead AI",
      avatar: "🤖",
      type: "assistant",
      user: "AI Assistant",
    },
    {
      text: "Yes, that would be great! When are you available?",
      brand: "John Doe",
      avatar: "👤",
      type: "user",
      user: "Customer",
    },
    {
      text: "Please select a convenient date and time for your consultation:",
      brand: "ChatHead AI",
      avatar: "🤖",
      type: "assistant",
      user: "AI Assistant",
    },
    {
      type: "assistant",
      isDatePicker: true, // Special flag to indicate this is a date picker message
      brand: "ChatHead AI",
      avatar: "🤖",
      user: "AI Assistant",
    }
  ];

  const smoothScrollToBottom = () => {
    if (messagesListRef.current) {
      messagesListRef.current.scrollTo({
        top: messagesListRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setIsBooking(true);

      // Add booking confirmation message
      const bookingMessage = {
        id: Date.now(),
        text: `Great! Your consultation is booked for ${selectedDate.formatted} at ${selectedTime}. You'll receive a confirmation email shortly. 📅✅`,
        brand: "ChatHead AI",
        avatar: "🤖",
        type: "assistant",
        user: "AI Assistant",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, bookingMessage]);

      // Add follow-up message
      setTimeout(() => {
        const followUpMessage = {
          id: Date.now() + 1,
          text: "Looking forward to speaking with you! Please feel free to ask if you have any questions before then. 😊",
          brand: "ChatHead AI",
          avatar: "🤖",
          type: "assistant",
          user: "AI Assistant",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, followUpMessage]);
        smoothScrollToBottom();
      }, 2000);

      // Hide date picker
      setShowDatePicker(false);
      setIsBooking(false);

      // Reset booking selection after 5 seconds
      setTimeout(() => {
        setSelectedDate(null);
        setSelectedTime(null);
      }, 5000);
    }
  };

  // Auto-select date, time, and confirm booking
  useEffect(() => {
    if (showDatePicker && availableDates.length > 0) {
      // Step 1: Auto-select first available date after 1 second
      const dateTimeout = setTimeout(() => {
        setSelectedDate(availableDates[0]);
        smoothScrollToBottom();

        // Step 2: Auto-select first time slot after 1.5 seconds
        const timeTimeout = setTimeout(() => {
          if (selectedDate || availableDates[0]) {
            setSelectedTime(timeSlots[1]);
            smoothScrollToBottom();

            // Step 3: Auto-confirm booking after 1.5 seconds
            const bookingTimeout = setTimeout(() => {
              if (
                (selectedDate || availableDates[0]) &&
                (selectedTime || timeSlots[1])
              ) {
                handleBooking();
              }
            }, 1500);

            return () => clearTimeout(bookingTimeout);
          }
        }, 1500);

        return () => clearTimeout(timeTimeout);
      }, 1000);

      return () => clearTimeout(dateTimeout);
    }
  }, [showDatePicker]);

  useEffect(() => {
    const addMessage = () => {
      if (!isActive) return;

      if (messageIndex < conversationFlow.length) {
        // Show typing indicator for assistant messages (but not for date picker)
        if (
          conversationFlow[messageIndex].type === "assistant" &&
          messageIndex > 0 &&
          !conversationFlow[messageIndex].isDatePicker
        ) {
          setIsTyping(true);
          setTimeout(() => {
            if (!isActive) return;
            setIsTyping(false);
            addActualMessage();
          }, 1500);
        } else {
          addActualMessage();
        }
      }
    };

    const addActualMessage = () => {
      if (!isActive) return;

      const message = conversationFlow[messageIndex];
      
      // Check if this is a date picker message
      if (message.isDatePicker) {
        setTimeout(() => {
          setShowDatePicker(true);
          smoothScrollToBottom();
        }, 500);
        messageIndex++;
        // Continue to next message
        if (messageIndex < conversationFlow.length) {
          const delay = Math.random() * 2000 + 1000;
          setTimeout(addMessage, delay);
        }
        return;
      }
      
      const newMessage = {
        id: Date.now(),
        ...message,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => {
        const updated = [...prev, newMessage];
        if (updated.length > 12) {
          return updated.slice(-12);
        }
        return updated;
      });

      smoothScrollToBottom();
      messageIndex++;

      // Random delay between messages
      if (messageIndex < conversationFlow.length) {
        const delay = Math.random() * 2000 + 1000;
        setTimeout(addMessage, delay);
      }
    };

    const timeout = setTimeout(addMessage, 1000);

    return () => {
      isActive = false;
      clearTimeout(timeout);
      setIsTyping(false);
    };
  }, []);

  useEffect(() => {
    smoothScrollToBottom();
  }, [messages, isTyping, showDatePicker]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesList} ref={messagesListRef}>
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`${styles.messageItem} ${message.type === "assistant" ? styles.assistantMessage : styles.userMessage}`}
          >
            <div className={styles.messageAvatar}>{message.avatar}</div>
            <div className={styles.messageWrapper}>
              <div className={styles.messageHeader}>
                <span className={styles.messageBrand}>{message.brand}</span>
                <span className={styles.messageTime}>{message.timestamp}</span>
              </div>
              <div className={styles.messageText}>{message.text}</div>
            </div>
          </div>
        ))}

        {/* Date Picker Component as Assistant Message */}
        {showDatePicker && (
          <div className={`${styles.messageItem} ${styles.assistantMessage}`}>
            <div className={styles.messageAvatar}>🤖</div>
            <div className={styles.messageWrapper}>
              <div className={styles.messageHeader}>
                <span className={styles.messageBrand}>ChatHead AI</span>
                <span className={styles.messageTime}>
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <div className={styles.datePickerContainer}>
                <div className={styles.datePickerCard}>
                  <div className={styles.datePickerHeader}>
                    <span>📅 Select Date & Time</span>
                  </div>

                  {/* Date Selection - Auto selected */}
                  <div className={styles.dateSection}>
                    <div className={styles.dateOptions}>
                      {availableDates.map((date) => (
                        <button
                          key={date.value}
                          className={`${styles.dateButton} ${selectedDate?.value === date.value || (!selectedDate && date === availableDates[0]) ? styles.selectedDate : ""}`}
                          style={{ pointerEvents: "none" }}
                        >
                          {date.formatted}
                          {!selectedDate && date === availableDates[0] && " ✓"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection - Auto selected */}
                  {selectedDate && (
                    <div className={styles.timeSection}>
                      <div className={styles.timeOptions}>
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            className={`${styles.timeButton} ${selectedTime === time || (!selectedTime && time === timeSlots[1]) ? styles.selectedTime : ""}`}
                            style={{ pointerEvents: "none" }}
                          >
                            {time}
                            {!selectedTime && time === timeSlots[1] && " ✓"}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Confirm Button - Auto clicked */}
                  {selectedDate && selectedTime && (
                    <button
                      className={styles.confirmBookingButton}
                      style={{ pointerEvents: "none" }}
                      disabled={isBooking}
                    >
                      {isBooking ? "Booking... ⏳" : "Booking Confirmed ✅"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Typing indicator */}
        {isTyping && (
          <div className={styles.typingIndicator}>
            <div className={styles.typingAvatar}>🤖</div>
            <div className={styles.typingDots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatComponent;