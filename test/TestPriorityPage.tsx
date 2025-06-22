import { NextPage } from 'next'
import { useState, useEffect } from 'react'

const TestPriorityPage: NextPage = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0)
  const [cssVariable, setCssVariable] = useState<string>('')

  useEffect(() => {
    const updateScreenInfo = () => {
      setScreenWidth(window.innerWidth)
      
      // Lấy giá trị CSS variable từ :root
      const root = document.documentElement
      const sectionBgValue = getComputedStyle(root).getPropertyValue('--section-bg').trim()
      setCssVariable(sectionBgValue)
    }

    updateScreenInfo()
    window.addEventListener('resize', updateScreenInfo)
    
    return () => window.removeEventListener('resize', updateScreenInfo)
  }, [])

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center">
        CSS Priority Test - Next.js Version
      </h1>
      
      {/* Debug Info */}
      <div className="fixed top-4 right-4 bg-black text-white p-4 rounded font-mono text-sm z-50">
        <div>--section-bg: {cssVariable}</div>
        <div>Screen: {screenWidth}px</div>
        <div>Desktop: {screenWidth >= 768 ? 'Yes' : 'No'}</div>
      </div>

      <p className="text-center mb-8 text-lg">
        <strong>Kiểm tra:</strong> Mobile = Xanh lá (#00FF00), Desktop ≥768px = Đỏ (#FF0000)
      </p>

      {/* Test Cases */}
      <div className="space-y-4">
        <div className="section-bg p-6 text-white font-bold text-center rounded border-2 border-gray-800 min-h-[80px] flex items-center justify-center">
          Test 1: .section-bg (Tailwind Plugin + CSS Variables)
        </div>

        <div className="p-6 text-white font-bold text-center rounded border-2 border-gray-800 min-h-[80px] flex items-center justify-center bg-[var(--section-bg)]">
          Test 2: bg-[var(--section-bg)] (Tailwind Arbitrary Value)
        </div>

        <div className="p-6 text-white font-bold text-center rounded border-2 border-gray-800 min-h-[80px] flex items-center justify-center bg-green-500 md:bg-red-500">
          Test 3: bg-green-500 md:bg-red-500 (Tailwind Responsive)
        </div>

        <div className="section-bg bg-blue-500 p-6 text-white font-bold text-center rounded border-2 border-gray-800 min-h-[80px] flex items-center justify-center">
          Test 4: .section-bg + bg-blue-500 (Conflict Test)
        </div>

        <div 
          className="p-6 text-white font-bold text-center rounded border-2 border-gray-800 min-h-[80px] flex items-center justify-center"
          style={{ backgroundColor: 'var(--section-bg)' }}
        >
          Test 5: Inline style với var(--section-bg)
        </div>

        <div 
          className="p-6 text-white font-bold text-center rounded border-2 border-gray-800 min-h-[80px] flex items-center justify-center"
          style={{ backgroundColor: 'purple' }}
        >
          Test 6: Inline style với màu cố định (purple)
        </div>
      </div>

      {/* CSS Variable Values Debug */}
      <div className="mt-8 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Debug CSS Variables</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <strong>Current CSS Variable:</strong> {cssVariable}
          </div>
          <div>
            <strong>Expected Values:</strong>
            <ul className="list-disc list-inside">
              <li>Mobile (&lt;768px): #00FF00</li>
              <li>Desktop (≥768px): #FF0000</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestPriorityPage
