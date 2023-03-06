import { test, expect, afterEach, vi } from 'vitest'
import { fireEvent } from '@testing-library/dom'
import { setDocumentBody, getButton } from '../helper'
import littlefoot from '../../src/littlefoot'

afterEach(() => {
  vi.useRealTimers()
})

test('activateDelay can be set after initialisation', () => {
  vi.useFakeTimers()
  setDocumentBody('single.html')

  const instance = littlefoot({ activateDelay: 0 })
  instance.updateSetting('activateDelay', 200)

  const button = getButton('1')
  fireEvent.click(button)
  vi.advanceTimersByTime(100)

  expect(button).toHaveClass('is-changing')

  vi.advanceTimersByTime(100)

  expect(button).not.toHaveClass('is-changing')
})
