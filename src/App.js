import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ClassCounter from './useState/ClassCounter'
import HookHover from './useState/HookHover';
import HookCounter from './useState/HookCounter';
import HookName from './useState/HookName';
import HookNumList from './useState/HookNumList';
import ClassCount from './useEffect/ClassCount';
import HookCount from './useEffect/HookCount';
import ClassCount2 from './useEffect/ClassCount2';
import HookCount2 from './useEffect/HookCount2';
import ClassMouse from './useEffect/ClassMouse';
import HookMouse from './useEffect/HookMouse';
import MouseContainer from './useEffect/MouseContainer';
import IntervalClassCounter from './useEffect/IntervalClassCounter';
import IntervalHookCounter from './useEffect/IntervalHookCounter';
import { Navbar } from './components/Navbar';
import { Hooks } from './components/Hooks';
import { UseState } from './components/Hooks/UseState';
import { UseEffect } from './components/Hooks/UseEffect';
import { UseContext } from './components/Hooks/UseContext';
import { UseReducer } from './components/Hooks/useReducer';
import Home from './components/Home';
import DataFetching from './useEffect/DataFetching';
import CompC from './useContext/CompC';
import { Counter } from './useReducer.js/Counter';
import { FirstCounter } from './useReducer.js/FirstCounter';
import { SecondCounter } from './useReducer.js/SecondCounter';
import CompGlobal from './useReducer.js/CompGlobal';
import FetchData from './useReducer.js/FetchData';
import Fetch2Data from './useReducer.js/Fetch2Data';
import { UseCallBack } from './components/Hooks/UseCallBack';
import ParentComponent from './useCallback/ParentComponent';
import { UseMemo } from './components/Hooks/UseMemo';
import AddCount from './useMemo.js/AddCount';
import { UseRef } from './components/Hooks/UseRef';
import FocusInput from './useRef.js/FocusInput';
import ClassTimer from './useRef.js/ClassTimer';
import HookTimer from './useRef.js/HookTimer';
import { UseCustomHook } from './components/Hooks/UseCustomHook';
import DocTitle from './useCustomHook/DocTitle';
import DocTitle2 from './useCustomHook/DocTitle2';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/hooks' element={<Hooks />} >

          <Route path='use-state' element={<UseState />}>
            <Route path='hook-number-list' element={<HookNumList />} />
            <Route path='hook-hover' element={<HookHover />} />
            <Route path='hook-name' element={<HookName />} />
            <Route path='hook-counter' element={<HookCounter />} />
            <Route path='class-counter' element={<ClassCounter />} />
          </Route>

          <Route path='use-effect' element={<UseEffect />}>
            <Route path='class-count' element={<ClassCount />} />
            <Route path='hook-count' element={<HookCount />} />
            <Route path='class-count2' element={<ClassCount2 />} />
            <Route path='hook-count2' element={<HookCount2 />} />
            <Route path='class-mouse' element={<ClassMouse />} />
            <Route path='hook-mouse' element={<HookMouse />} />
            <Route path='mouse-container' element={<MouseContainer />} />
            <Route path='interval-class-count' element={<IntervalClassCounter />} />
            <Route path='interval-hook-count' element={<IntervalHookCounter />} />
            <Route path='data-fetching' element={<DataFetching />} />
          </Route>

          <Route path='use-context' element={<UseContext />}>
            <Route path='comp-c' element={<CompC />} />
          </Route>

          <Route path='use-reducer' element={<UseReducer />}>
            <Route path='counter' element={<Counter />} />
            <Route path='first-counter' element={<FirstCounter />} />
            <Route path='second-counter' element={<SecondCounter />} />
            <Route path='comp-global' element={<CompGlobal />} />
            <Route path='fetch-data' element={<FetchData />} />
            <Route path='fetch-data-two' element={<Fetch2Data />} />
          </Route>

          <Route path='use-callback' element={<UseCallBack />}>
            <Route path='parent-component' element={<ParentComponent />} />
          </Route>

          <Route path='use-memo' element={<UseMemo />}>
            <Route path='add-count' element={<AddCount />} />
          </Route>

          <Route path='use-ref' element={<UseRef />}>
            <Route path='focus-input' element={<FocusInput />} />
            <Route path='class-timer' element={<ClassTimer />} />
            <Route path='hook-timer' element={<HookTimer />} />
          </Route>

          <Route path='custom-hook' element={<UseCustomHook />} >
            <Route path='doc-title' element={<DocTitle />} />
            <Route path='doc-title-two' element={<DocTitle2 />} />
          </Route>

        </Route>
      </Routes>
    </>

  );
}

export default App;
