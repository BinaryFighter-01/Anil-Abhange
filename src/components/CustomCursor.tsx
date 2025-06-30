
import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const outlineRef = useRef<HTMLDivElement | null>(null);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [clickPosition, setClickPosition] = useState<{ x: number, y: number } | null>(null);
  const [isOnButton, setIsOnButton] = useState<boolean>(false);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;

    if (!dot || !outline) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Animate dot to follow cursor precisely with no delay
      if (dot) {
        dot.style.left = `${clientX}px`;
        dot.style.top = `${clientY}px`;
      }

      // Animate outline to follow cursor with a slight delay for smoother effect
      if (outline) {
        outline.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, {
          duration: 100,
          fill: "forwards",
          easing: "ease-out"
        });
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (!outline || !dot) return;

      setIsClicking(true);
      setClickPosition({ x: e.clientX, y: e.clientY });

      // Cursor click effect
      outline.style.width = '18px';
      outline.style.height = '18px';
      dot.style.width = '4px';
      dot.style.height = '4px';

      // Add click flash effect
      const flash = document.createElement('div');
      flash.className = 'cursor-click-flash';
      flash.style.left = `${e.clientX}px`;
      flash.style.top = `${e.clientY}px`;
      document.body.appendChild(flash);

      setTimeout(() => {
        flash.remove();

        if (outline && dot) {
          outline.style.width = isOnButton ? '50px' : '40px';
          outline.style.height = isOnButton ? '50px' : '40px';
          dot.style.width = '8px';
          dot.style.height = '8px';
        }
        setIsClicking(false);
      }, 300);
    };

    const handleMouseUp = () => {
      if (!outline || !dot) return;
      outline.style.width = isOnButton ? '50px' : '40px';
      outline.style.height = isOnButton ? '50px' : '40px';
    };

    const handleLinkHover = () => {
      if (!outline || !dot) return;
      setIsOnButton(true);
      outline.style.width = '50px';
      outline.style.height = '50px';
      outline.classList.add('cursor-hover');

      // Use spinner animation effect instead of rotation
      outline.classList.add('cursor-spinner');
    };

    const handleLinkLeave = () => {
      if (!outline || !dot) return;
      setIsOnButton(false);
      outline.style.width = '40px';
      outline.style.height = '40px';
      outline.classList.remove('cursor-hover');

      // Remove spinner animation
      outline.classList.remove('cursor-spinner');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const links = document.querySelectorAll('a, button, .nav-link');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    // Make cursor visible over chatbox
    const handleChatboxHover = () => {
      if (dot && outline) {
        dot.style.zIndex = "10000";
        outline.style.zIndex = "10000";
      }
    };

    // Reset cursor z-index when leaving chatbox
    const handleChatboxLeave = () => {
      if (dot && outline) {
        dot.style.zIndex = "999";
        outline.style.zIndex = "999";
      }
    };

    // Add chatbox specific hover handling
    const chatbox = document.querySelector('.chatbot-window');
    if (chatbox) {
      chatbox.addEventListener('mouseenter', handleChatboxHover);
      chatbox.addEventListener('mouseleave', handleChatboxLeave);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });

      if (chatbox) {
        chatbox.removeEventListener('mouseenter', handleChatboxHover);
        chatbox.removeEventListener('mouseleave', handleChatboxLeave);
      }
    };
  }, [isOnButton]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot z-[999]"></div>
      <div ref={outlineRef} className="cursor-outline z-[999]"></div>
      {isClicking && clickPosition && (
        <div
          className="cursor-bite-effect"
          style={{
            left: `${clickPosition.x}px`,
            top: `${clickPosition.y}px`
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
