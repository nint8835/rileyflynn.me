import React, { FunctionComponent, useRef, useEffect, useState } from "react";
import type { editor } from "monaco-editor/esm/vs/editor/editor.api"
// @ts-ignore
import monacoEditorStyles from "./styles/monaco_editor.module.css";

type MonacoEditorProps = {
  setContents: React.Dispatch<React.SetStateAction<string>>;
};

const MonacoEditor: FunctionComponent<MonacoEditorProps> = ({ setContents }) => {
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
      createdEditor = monaco.editor.create(editorRef.current, {
        theme: "vs-dark",
        automaticLayout: true,
      });
      createdEditor.onDidChangeModelContent((event) => {
        setContents(createdEditor!.getValue());
      })
      setMonacoEditor(createdEditor);
    })();
    return () => {
      if (createdEditor !== undefined) {
        createdEditor.dispose();
      }
    };
  }, [editorRef]);

  return <div ref={editorRef} className={monacoEditorStyles.monacoEditor} />;
};

export default MonacoEditor;
