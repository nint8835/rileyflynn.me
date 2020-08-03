import type { editor } from "monaco-editor/esm/vs/editor/editor.api";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import PalenightTheme from "../util/palenight";
// @ts-ignore
import editorStyles from "./styles/editor.module.css";

type MonacoEditorProps = {
  initialContents?: string;
  setContents: React.Dispatch<React.SetStateAction<string>>;
};

const MonacoEditor: FunctionComponent<MonacoEditorProps> = ({
  setContents,
  initialContents = "",
}) => {
  const [
    monacoEditor,
    setMonacoEditor,
  ] = useState<editor.IStandaloneCodeEditor | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let createdEditor: editor.IStandaloneCodeEditor | undefined;
    (async () => {
      if (editorRef.current === null) {
        return;
      }
      const monaco = await import("monaco-editor");
      monaco.editor.defineTheme("palenight", PalenightTheme);
      createdEditor = monaco.editor.create(editorRef.current, {
        theme: "palenight",
        automaticLayout: true,
        value: initialContents,
        minimap: {
          enabled: false,
        },
      });
      createdEditor.onDidChangeModelContent((event) => {
        setContents(createdEditor!.getValue());
      });
      setMonacoEditor(createdEditor);
    })();
    return () => {
      if (createdEditor !== undefined) {
        createdEditor.dispose();
      }
    };
  }, [editorRef]);

  return <div ref={editorRef} className={editorStyles.monacoEditor} />;
};

export default MonacoEditor;
