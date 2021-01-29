import {
  formatDate,
  addMinutes,
  addSeconds,
  decrementSeconds,
  getSecondsDuration,
} from '~/lib/dateFormat/dateFormat'

describe('DateFormat', () => {
  it('should date return 27/11', () => {
    const date = formatDate(new Date('2020-11-27T16:01:36.12'), 'dd/MM')
    expect(date).toBe('27/11')
  })

  it('should add minutes', () => {
    const date = addMinutes(new Date('2020-11-27T19:01:36.120Z'), 0)
    expect(date).toEqual(new Date('2020-11-27T19:00:36.120Z'))
  })

  it('should add seconds', () => {
    const date = addSeconds(new Date('2020-11-27T19:01:36.120Z'), 59)
    expect(date).toEqual(new Date('2020-11-27T19:01:59.120Z'))
  })

  it('should decrement seconds', () => {
    const date = decrementSeconds(new Date('2020-11-27T19:01:36.120Z'), 1)
    expect(date).toEqual(new Date('2020-11-27T19:01:35.120Z'))
  })

  it('should get seconds', () => {
    const date = getSecondsDuration(new Date('2020-11-27T19:01:36.120Z'))
    expect(date).toEqual(36)
  })
})
