
"use client";

import { mailchimp } from "@/resources";
import {
  Button,
  Heading,
  Input,
  Text,
  Background,
  Column,
  Row,
  Textarea,
  Icon,
} from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState } from "react";

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");



  function validateEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name.trim()) return setError("Please enter your name.");
    if (!validateEmail(email)) return setError("Please enter a valid email.");
    if (!subject.trim()) return setError("Please enter a subject.");
    if (!message.trim() || message.trim().length < 5)
      return setError("Please enter a message.");

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send message");
      }

      setSuccess("Message sent — I'll reply to your email soon.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />

      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          Contact me
        </Heading>
        <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak">
          You can send me a message here and I'll reply to the email you provide.
        </Text>
      </Column>

      <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Column fillWidth maxWidth={40} gap="20">
          <Text variant="label-default-s" onBackground="neutral-weak" marginBottom="4">
            Send me a message
          </Text>

          {/* Name Input */}
          <Column fillWidth gap="8">
            <Row gap="8" align="center">
              <div style={{ width: 44, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="person" size="m" />
              </div>
              <div style={{ flex: 1 }}>
                <Input
                  id="contact-name"
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  radius="left"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "16px",
                    border: "2px solid #e5e7eb",
                    borderRadius: "12px",
                  }}
                />
              </div>
            </Row>
          </Column>

          {/* Email Input */}
          <Column fillWidth gap="8">
            <Row gap="8" align="center">
              <div style={{ width: 44, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="email" size="m" />
              </div>
              <div style={{ flex: 1 }}>
                <Input
                  id="contact-email"
                  placeholder="Your Email *"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  radius="left"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "16px",
                    border: "2px solid #e5e7eb",
                    borderRadius: "12px",
                  }}
                />
              </div>
            </Row>
          </Column>

          {/* Subject Input */}
          <Column fillWidth gap="8">
            <Row gap="8" align="center">
              <div style={{ width: 44, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="document" size="m" />
              </div>
              <div style={{ flex: 1 }}>
                <Input
                  id="contact-subject"
                  placeholder="Subject *"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  radius="left"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "16px",
                    border: "2px solid #e5e7eb",
                    borderRadius: "12px",
                  }}
                />
              </div>
            </Row>
          </Column>

          {/* Message Textarea */}
          <Column fillWidth gap="8">
            <Row gap="8" align="start">
              <div style={{ width: 44, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="email" size="m" />
              </div>
              <div style={{ flex: 1 }}>
                <Textarea
                  id="contact-message"
                  placeholder="Your Message *"
                  value={message}
                  onChange={(e: any) => setMessage(e.target.value)}
                  rows={6}
                  required
                  radius="left"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "16px",
                    border: "2px solid #e5e7eb",
                    borderRadius: "12px",
                    minHeight: "150px",
                  }}
                />
              </div>
            </Row>
          </Column>

          {/* Feedback */}
          {error && (
            <Row
              fillWidth
              padding="m"
              radius="m"
              style={{
                background: "#fee2e2",
                border: "2px solid #fca5a5",
              }}
            >
              <Text variant="label-strong-s" style={{ color: "#dc2626" }}>
                ⚠️ {error}
              </Text>
            </Row>
          )}
          {success && (
            <Row
              fillWidth
              padding="m"
              radius="m"
              style={{
                background: "#d1fae5",
                border: "2px solid #6ee7b7",
              }}
            >
              <Text variant="label-strong-s" style={{ color: "#059669" }}>
                ✓ {success}
              </Text>
            </Row>
          )}

          {/* Submit button */}
          <Row fillWidth horizontal="center" marginTop="m">
            <Column maxWidth={12} fillWidth>
              <Button
                type="submit"
                size="l"
                fillWidth
                disabled={loading}
                variant="secondary"
                data-border="rounded"
                style={{ border: "2px solid #307A94" }}
              >
                {loading ? "⏳ Sending..." : "🚀 Send message"}
              </Button>
            </Column>
          </Row>
        </Column>
      </form>
    </Column>
  );
};





















// "use client";

// import { mailchimp, newsletter } from "@/resources";
// import {
//   Button,
//   Heading,
//   Input,
//   Text,
//   Background,
//   Column,
//   Row,
//   Textarea,
//   Icon,
// } from "@once-ui-system/core";
// import { opacity, SpacingToken } from "@once-ui-system/core";
// import { useState } from "react";

// export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   if (newsletter.display === false) return null;

//   function validateEmail(value: string) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//   }

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     if (!name.trim()) return setError("Please enter your name.");
//     if (!validateEmail(email)) return setError("Please enter a valid email.");
//     if (!subject.trim()) return setError("Please enter a subject.");
//     if (!message.trim() || message.trim().length < 5)
//       return setError("Please enter a message.");

//     setLoading(true);
//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, subject, message }),
//       });

//       if (!res.ok) {
//         const data = await res.json().catch(() => ({}));
//         throw new Error(data?.error || "Failed to send message");
//       }

//       setSuccess("Message sent — I'll reply to your email soon.");
//       setName("");
//       setEmail("");
//       setSubject("");
//       setMessage("");
//     } catch (err: any) {
//       setError(err?.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   // Small presentational helpers
//   const fieldWrapperStyle: React.CSSProperties = {
//     display: "flex",
//     borderRadius: 12,
//     overflow: "hidden",
//     boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.04)",
//     background: "#fff",
//     alignItems: "stretch",
//   };

//   const iconBlockStyle: React.CSSProperties = {
//     width: 56,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "#eaf6ee",
//   };

//   const inputStyle: React.CSSProperties = {
//     background: "transparent",
//     border: "none",
//     boxShadow: "none",
//     padding: "16px",
//   };

//   return (
//     <Column
//       overflow="hidden"
//       fillWidth
//       padding="xl"
//       radius="l"
//       marginBottom="m"
//       horizontal="center"
//       align="center"
//       background="surface"
//       border="neutral-alpha-weak"
//       {...flex}
//     >
//       <Background
//         top="0"
//         position="absolute"
//         mask={{
//           x: mailchimp.effects.mask.x,
//           y: mailchimp.effects.mask.y,
//           radius: mailchimp.effects.mask.radius,
//           cursor: mailchimp.effects.mask.cursor,
//         }}
//         gradient={{
//           display: mailchimp.effects.gradient.display,
//           opacity: mailchimp.effects.gradient.opacity as opacity,
//           x: mailchimp.effects.gradient.x,
//           y: mailchimp.effects.gradient.y,
//           width: mailchimp.effects.gradient.width,
//           height: mailchimp.effects.gradient.height,
//           tilt: mailchimp.effects.gradient.tilt,
//           colorStart: mailchimp.effects.gradient.colorStart,
//           colorEnd: mailchimp.effects.gradient.colorEnd,
//         }}
//         dots={{
//           display: mailchimp.effects.dots.display,
//           opacity: mailchimp.effects.dots.opacity as opacity,
//           size: mailchimp.effects.dots.size as SpacingToken,
//           color: mailchimp.effects.dots.color,
//         }}
//         grid={{
//           display: mailchimp.effects.grid.display,
//           opacity: mailchimp.effects.grid.opacity as opacity,
//           color: mailchimp.effects.grid.color,
//           width: mailchimp.effects.grid.width,
//           height: mailchimp.effects.grid.height,
//         }}
//         lines={{
//           display: mailchimp.effects.lines.display,
//           opacity: mailchimp.effects.lines.opacity as opacity,
//           size: mailchimp.effects.lines.size as SpacingToken,
//           thickness: mailchimp.effects.lines.thickness,
//           angle: mailchimp.effects.lines.angle,
//           color: mailchimp.effects.lines.color,
//         }}
//       />

//       <Column maxWidth="xs" horizontal="center">
//         <Heading marginBottom="s" variant="display-strong-xs">
//           Contact me
//         </Heading>
//         <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak">
//           You can send me a message here and I'll reply to the email you provide.
//         </Text>
//       </Column>

//       <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
//         <Row fillWidth maxWidth={24} gap="24" s={{ direction: "column" }}>
//           <Row fillWidth gap="24" s={{ direction: "row" }}>
//             {/* Left column: stacked inputs */}
//             <Column style={{ flex: 1, gap: 12 }}>
//               <Text variant="label-default-s" onBackground="neutral-weak" marginBottom="s">
//                 Send me a message
//               </Text>

//               <div style={fieldWrapperStyle}>
//                 <div style={iconBlockStyle}>
//                   <Icon name="user" size="m" />
//                 </div>
//                 <div style={{ flex: 1 }}>
//                   <Input id="contact-name" placeholder="Name *" value={name} onChange={(e) => setName(e.target.value)} required style={inputStyle} />
//                 </div>
//               </div>

//               <div style={{ height: 12 }} />

//               <div style={fieldWrapperStyle}>
//                 <div style={iconBlockStyle}>
//                   <Icon name="mail" size="m" />
//                 </div>
//                 <div style={{ flex: 1 }}>
//                   <Input id="contact-email" placeholder="E-mail *" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
//                 </div>
//               </div>

//               <div style={{ height: 12 }} />

//               <div style={fieldWrapperStyle}>
//                 <div style={iconBlockStyle}>
//                   <Icon name="edit" size="m" />
//                 </div>
//                 <div style={{ flex: 1 }}>
//                   <Input id="contact-subject" placeholder="Subject *" value={subject} onChange={(e) => setSubject(e.target.value)} required style={inputStyle} />
//                 </div>
//               </div>
//             </Column>

//             {/* Right column: large message textarea */}
//             <Column style={{ flex: 1 }}>
//               <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.04)", background: "#fff", height: "100%" }}>
//                 <Textarea id="contact-message" placeholder="Message *" value={message} onChange={(e: any) => setMessage(e.target.value)} rows={12} required style={{ background: "transparent", border: "none", padding: 16, minHeight: 260 }} />
//               </div>
//             </Column>
//           </Row>

//           {/* Feedback */}
//           {error && (
//             <Text variant="label-strong-s" onBackground="danger-weak">
//               {error}
//             </Text>
//           )}
//           {success && (
//             <Text variant="label-strong-s" onBackground="brand-weak">
//               {success}
//             </Text>
//           )}

//           {/* Submit button centered */}
//           <Row fillWidth horizontal="center">
//             <Column maxWidth={12} fillWidth>
//               <Button type="submit" size="m" fillWidth disabled={loading}>
//                 {loading ? "Sending..." : "Send message"}
//               </Button>
//             </Column>
//           </Row>
//         </Row>
//       </form>
//     </Column>
//   );
// };
