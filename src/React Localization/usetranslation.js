import { useTranslation } from 'react-i18next';

export default function useCustomTranslation() {
  const { t } = useTranslation();
  return t;
}