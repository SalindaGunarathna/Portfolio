import React from "react";
import { Column, Heading, Text } from "@once-ui-system/core";
import { Mailchimp } from "@/components/Mailchimp";

export default function ContactPage() {
  return (
    <Column maxWidth="m" padding="xl" horizontal="center" align="center">
      {/* <Heading marginBottom="s" variant="display-strong-xs">
        Contact me
      </Heading>
      <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak">
        Use the form below to send me a message and I will reply to your email.
      </Text> */}

      <Mailchimp />
    </Column>
  );
}
