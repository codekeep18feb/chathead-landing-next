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
  const [isRestarting, setIsRestarting] = useState(false);
  const messagesListRef = useRef(null);
  let messageIndex = 0;
  let isActive = true;
  let restartTimeout = null;

  // Available time slots
  const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "3:00 PM", "4:00 PM"];

  // Generate next 7 days for booking
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

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
      isDatePicker: true, 
      brand: "ChatHead AI",
      avatar: "🤖",
      user: "AI Assistant",
    },
  ];

  const smoothScrollToBottom = () => {
    setTimeout(() => {
      if (messagesListRef.current) {
        messagesListRef.current.scrollTo({
          top: messagesListRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 100);
  };


  const startConversation = () => {
    let localMessageIndex = 0;
    isActive = true;

    const addMessage = () => {
      if (!isActive) return;

      if (localMessageIndex < conversationFlow.length) {
        if (
          conversationFlow[localMessageIndex].type === "assistant" &&
          localMessageIndex > 0 &&
          !conversationFlow[localMessageIndex].isDatePicker
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

      const message = conversationFlow[localMessageIndex];

      if (message.isDatePicker) {
        setTimeout(() => {
          setShowDatePicker(true);
          smoothScrollToBottom();
        }, 500);
        localMessageIndex++;
        return;
      }

      const newMessage = {
        id: Date.now() + Math.random(),
        ...message,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, newMessage]);
      smoothScrollToBottom();
      localMessageIndex++;

      if (localMessageIndex < conversationFlow.length) {
        const delay = Math.random() * 2000 + 1000;
        setTimeout(addMessage, delay);
      }
    };

    const timeout = setTimeout(addMessage, 1500);

    return () => {
      clearTimeout(timeout);
    };
  };

  const handleBooking = (date, time) => {
    const bookingDate = date || selectedDate;
    const bookingTime = time || selectedTime;

    if (bookingDate && bookingTime) {
      setIsBooking(true);

      const bookingMessage = {
        id: Date.now(),
        text: `Great! Your consultation is booked for ${bookingDate.formatted} at ${bookingTime}. You'll receive a confirmation email shortly. 📅✅`,
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
      smoothScrollToBottom();

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

        // Add thank you message after follow-up
        setTimeout(() => {
          const thankYouMessage = {
            id: Date.now() + 2,
            text: "Thank you! 🙏",
            brand: "John Doe",
            avatar: "👤",
            type: "user",
            user: "Customer",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
          setMessages((prev) => [...prev, thankYouMessage]);
          smoothScrollToBottom();

          // Add a small delay, then restart the conversation
          setTimeout(() => {
            // Clear all messages and restart
            setMessages([]);
            setShowDatePicker(false);
            setSelectedDate(null);
            setSelectedTime(null);
            messageIndex = 0;

            // Start new conversation after a brief pause
            setTimeout(() => {
              startConversation();
            }, 1000);
          }, 2000);
        }, 1500);
      }, 2000);

      // Hide date picker after a delay
      setTimeout(() => {
        setShowDatePicker(false);
      }, 500);

      setIsBooking(false);
    }
  };


  useEffect(() => {
    if (showDatePicker && availableDates.length > 0 && !isRestarting) {
      const dateTimeout = setTimeout(() => {
        const firstDate = availableDates[0];
        setSelectedDate(firstDate);
        smoothScrollToBottom();

        const timeTimeout = setTimeout(() => {
          const secondTimeSlot = timeSlots[1];
          setSelectedTime(secondTimeSlot);
          smoothScrollToBottom();

          const bookingTimeout = setTimeout(() => {
            if (firstDate && secondTimeSlot) {
              handleBooking(firstDate, secondTimeSlot);
            }
          }, 1500);

          return () => clearTimeout(bookingTimeout);
        }, 1500);

        return () => clearTimeout(timeTimeout);
      }, 1000);

      return () => clearTimeout(dateTimeout);
    }
  }, [showDatePicker, isRestarting]);

  // Initial conversation start
  useEffect(() => {
    const cleanup = startConversation();

    return () => {
      isActive = false;
      if (restartTimeout) clearTimeout(restartTimeout);
      if (cleanup) cleanup();
    };
  }, []);

  useEffect(() => {
    smoothScrollToBottom();
  }, [messages, isTyping, showDatePicker]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesList} ref={messagesListRef}>
        {messages.map((message) => (
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

        {showDatePicker && (
          <div className={`${styles.messageItem} ${styles.assistantMessage}`}>
            <div className={styles.messageAvatar}>🤖</div>
            <div className={styles.messageWrapper}>
              <div className={styles.messageHeader}>
                <span className={styles.messageBrand}>ChatHead AI</span>
                <span className={styles.messageTime}>
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <div className={styles.datePickerContainer}>
                <div className={styles.datePickerCard}>
                  <div className={styles.datePickerHeader}>
                    <span>📅 Select Date & Time</span>
                  </div>

                  <div className={styles.dateSection}>
                    <div className={styles.dateOptions}>
                      {availableDates.map((date) => (
                        <button
                          key={date.value}
                          className={`${styles.dateButton} ${selectedDate?.value === date.value ? styles.selectedDate : ""}`}
                          style={{ pointerEvents: "none" }}
                        >
                          {date.formatted}
                          {selectedDate?.value === date.value}
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <div className={styles.timeSection}>
                      <div className={styles.timeOptions}>
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            className={`${styles.timeButton} ${selectedTime === time ? styles.selectedTime : ""}`}
                            style={{ pointerEvents: "none" }}
                          >
                            {time}
                            {selectedTime === time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

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
      </div>
    </div>
  );
};

export default ChatComponent;
