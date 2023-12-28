import { Button } from '@/shared/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '@/entities/Counter'
import { ButtonTheme } from '@/shared/ui/Button/ui/Button'
import { getCounterValue } from '@/entities/Counter/model/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'

export const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(getCounterValue)
  const { t } = useTranslation()
  function increment () {
    dispatch(counterActions.increment())
  }

  function decrement () {
    if (count < 1) return
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid='counter'>{count}</h1>
      <Button
        data-testid='increment'
        onClick={increment}
        theme={ButtonTheme.BORDER}
      >
        {t('Increment')}
      </Button>
      <br />
      <Button
        onClick={decrement}
        theme={ButtonTheme.BORDER}
      >
        {t('Decrement')}
      </Button>
    </div>
  )
}
