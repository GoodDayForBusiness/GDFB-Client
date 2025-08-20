import { useState, KeyboardEvent, useRef } from "react";
import { Send, MapPin } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || disabled) return;
    onSendMessage(message);
    setMessage("");
    textareaRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey &&
      e.nativeEvent.isComposing === false
    ) {
      e.preventDefault();
      if (!disabled) {
        handleSubmit(e);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <div className="flex-1 relative">
        <div className="absolute left-3 top-3 text-gray-400">
          <MapPin className="w-4 h-4" />
        </div>
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="지역명과 업종을 입력해주세요. 예: 강남구 역삼동 카페 창업 상권 분석"
          className="w-full min-h-[48px] max-h-[160px] pl-10 pr-4 py-3 bg-white text-gray-900 placeholder:text-gray-500 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-gray-300 focus:border-blue-500 transition-all"
        />
      </div>
      <button
        type="submit"
        disabled={!message.trim() || disabled}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl hover:from-blue-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
      >
        <Send className="w-4 h-4" />
        <span className="hidden sm:inline">분석</span>
      </button>
    </form>
  );
}
