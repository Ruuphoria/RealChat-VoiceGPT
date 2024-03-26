import React, { useCallback, useState } from "react";

function SendMessageForm(props) {
  const [content, setContent] = useState("");

  // Use useCall